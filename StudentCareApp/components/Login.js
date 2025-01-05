import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Button, Divider, PaperProvider, Text, TextInput } from "react-native-paper";
import { students } from "../data/StudentsDb";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigation();

    const handlebutton = () => {
        const student = students.find(
          (student) => student.username === name && student.password === password
        );
    
        if (student) {
          navigate.navigate("profile", { studentdata: student });
        } else {
          alert("Invalid username or password.");
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
        <View style={styles.container}>
          <Text style={styles.loginText}>Student Login</Text>
          <Divider />
        </View>

        <View style={styles.formcontainer}>
          <TextInput label="Username" mode="outlined" onChangeText={setName} />
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            onChangeText={setPassword}
          />
          </View>
      </ScrollView>  
    </PaperProvider>
    );
}