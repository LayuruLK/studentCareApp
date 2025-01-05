export default function Subjects() {
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