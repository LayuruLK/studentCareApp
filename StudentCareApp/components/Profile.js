import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Button, Divider, PaperProvider, Text, TextInput } from "react-native-paper";
export default function Profile() {
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

           <View style={styles.studentInfoContainer}>
          <Image
            style={styles.profilePicContainer}
            source={studentdata.profile_pic}
          ></Image>
          <Text style={styles.studentName}>Name:{studentdata.username}</Text>
          <Text style={styles.studentDetails}>Age:{studentdata.age}</Text>
          <Text style={styles.studentDetails}>Gender:{studentdata.gender}</Text>
        </View>
        
         </ScrollView> 
      </PaperProvider>
    );
}