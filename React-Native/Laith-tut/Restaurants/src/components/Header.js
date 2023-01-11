import { Text, View, StyleSheet } from "react-native";

export default function Header(){
  return(
    <View style={styles.container}> 
      {/* view here is parent element */}
    <Text style={styles.lightHeader}>Grab your</Text>
    <Text style={styles.boldHeader}>delicious meal!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:60, 
    marginHorizontal:25,
  },
  lightHeader:{
    fontSize:35,
  },
  boldHeader:{
    fontSize:40,
    fontWeight:"bold",
  }
})