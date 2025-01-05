export default function Subjects() {
    const [subject, setSubject] = useState("");
    const [marks, setMarks] = useState("");
    const [courses, setCourses] = useState([]);
    const [average, setAverage] = useState(null);
    
    const handleAddCourse = () => {
        if (subject && marks) {
          const marksNum = parseFloat(marks);
          if (!isNaN(marksNum)) {
            setCourses((prevCourses) => [
              ...prevCourses,
              { subject, marks: marksNum },
            ]);
            setSubject("");
            setMarks("");
            calculateAverage();
          } else {
            alert("Please enter valid marks.");
          }
        } else {
          alert("Please enter both subject and marks.");
        }
      };
    
      const calculateAverage = () => {
        if (courses.length > 0) {
          const totalMarks = courses.reduce((sum, course) => sum + course.marks, 0);
          const avg = totalMarks / courses.length;
          setAverage(avg.toFixed(2));
        }
      };
    
    return(
        <PaperProvider>
           <ScrollView>
           <View style={styles.header}>
             <Text style={styles.headerText}>UoV Student Care</Text>
           </View>
           <View style={styles.imagecontain}>
             <Image
              source={require("../assets/uovlogo.png")}
              style={styles.image}
            />
           </View>
           <View style={styles.headerSubject}>
             <Text style={styles.headerTextsubject}>Computer Science</Text>
           </View>

           <View style={styles.inputContainer}>
          <TextInput
            label="Subject"
            value={subject}
            onChangeText={setSubject}
            style={styles.input}
          />
          <TextInput
            label="Marks"
            value={marks}
            keyboardType="numeric"
            onChangeText={setMarks}
            style={styles.input}
          />
          <Button
            mode="contained"
            onPress={handleAddCourse}
            style={styles.button}
          >
            Add Subject and Marks
          </Button>
        </View>

        <Divider style={styles.divider} />

        <View style={styles.courseListContainer}>
          <Text style={styles.courseListTitle}>
            Subjects and Marks Information:
          </Text>
          {courses.length > 0 ? (
            <List.Section>
              {courses.map((course, index) => (
                <List.Item
                  key={index}
                  title={course.subject}
                  description={`Marks: ${course.marks}`}
                  left={(props) => <List.Icon {...props} icon="book" />}
                />
              ))}
            </List.Section>
          ) : (
            <Text>No subjects added yet.</Text>
          )}
        </View>

        <Divider style={styles.divider} />

        {average !== null && (
          <View style={styles.averageContainer}>
            <Text style={styles.averageText}>Average Marks: {average}</Text>
          </View>
        )}

        <View style={styles.header}>
          <Text style={styles.headerText}>UoV @ 2025</Text>
        </View>

        </ScrollView>  
      </PaperProvider>
    );
}