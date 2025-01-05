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
         </ScrollView> 
      </PaperProvider>
    );
}