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

        </ScrollView>  
      </PaperProvider>
    );
}