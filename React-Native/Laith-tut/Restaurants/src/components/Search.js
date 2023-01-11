import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
// expo provides vector images
import {FontAwesome} from "@expo/vector-icons"
import { elevation } from "./common/styles";

export default function Search({changeCateg}) {
  const [input, setInput] = useState("")
  function handleEndEditing(){
    if(!input) return
    changeCateg(input)
    setInput("")
  }
  return (
    <View style={[styles.container,styles.elevation]}>
      <FontAwesome name="search" size={25}/>
      <TextInput 
     onChangeText={text=>setInput(text)} 
     onEndEditing={handleEndEditing} //will be called when pressed enter
     value={input}
      style={styles.textInput} placeholder="Restaurants, food"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    marginTop:5,
    marginHorizontal:25,
    backgroundColor:"white",
    padding:15,
  borderRadius:40,
    // shadow styling
    // shadowColor:"black",
    // shadowOffset:{width:5,height:5},
    // elevation:3,
    // shadowOpacity:0.1,

    // extracted in styles.js in common called elevation
    
  },
  elevation,
  textInput: {
    // backgroundColor: "pink",
    fontSize:20,
    marginLeft:10
  },
});
