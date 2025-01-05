import { Image, ScrollView, StyleSheet, View } from "react-native";
import { PaperProvider, Text, Divider } from "react-native-paper";
export default function Course() {
    return(
    <PaperProvider>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>UoV Student Care</Text>
        </View>
        View style={styles.imagecontain}>
          <Image
            source={require("../assets/uovlogo.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.courseInfoContainer}>
          <Text style={styles.title}>Course Information</Text>

          <Text style={styles.infoText}>
            <Text style={styles.label}>Course Name: </Text>
            {sampleCourseData.courseName}
          </Text>

          <Text style={styles.infoText}>
            <Text style={styles.label}>Course Code: </Text>
            {sampleCourseData.courseCode}
          </Text>

          <Text style={styles.infoText}>
            <Text style={styles.label}>Department: </Text>
            {sampleCourseData.department}
          </Text>

          <Text style={styles.infoText}>
            <Text style={styles.label}>Duration: </Text>
            {sampleCourseData.duration}
          </Text>

          <Text style={styles.infoText}>
            <Text style={styles.label}>Description: </Text>
            {sampleCourseData.description}
          </Text>

          <Divider style={styles.divider} />
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>UoV @2025</Text>
        </View>
      </ScrollView>
    </PaperProvider>
    );
}