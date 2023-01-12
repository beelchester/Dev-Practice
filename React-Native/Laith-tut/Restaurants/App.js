// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//     {/* view component similar to div */}
//       <Text>Open up App.js to start working xd haha ez</Text>
//       {/* text similar to p tag */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList, StyleSheet } from "react-native"; // default components of react-native
import { CategoryItem } from "./src/components/CategoryItem";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import Categories from "./src/components/Categories";
import Restaurants  from "./src/components/Restaurants";
export default function App() {
  const commonCategories = [
    {
      name: "Burger",
      image: require("./src/assets/images/burger.png"),
    },
    {
      name: "Pizza",
      image: require("./src/assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      image: require("./src/assets/images/cake.png"),
    },
    {
      name: "Drinks",
      image: require("./src/assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      image: require("./src/assets/images/steak.png"),
    },
    {
      name: "Pasta",
      image: require("./src/assets/images/pasta.png"),
    },
  ];

  const [currentCateg, setCurrentCateg] = useState("Burger")

  return (
    <View >
      {/* view component similar to div */}
      <Header />
      <Search 
              changeCateg = {(categ) => setCurrentCateg(categ)}
      />
      
      <Categories commonCategories={commonCategories}
      currentCateg={currentCateg}
              changeCateg = {(item) => setCurrentCateg(item)}
      />
      {/* <CategoryItem name= "Burger" image= {require('./src/assets/images/burger.png')}/> */}
      {/* <Text>Hellowqedwadawsd ad</Text> */}
      {/* text similar to p tag */}
      <StatusBar />
      {/* from expo, to show battery, etc on phone */}
      <Restaurants/>
    </View>
  );
}



