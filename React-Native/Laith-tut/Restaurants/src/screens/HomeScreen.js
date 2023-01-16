import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList, StyleSheet } from "react-native"; // default components of react-native
// import { CategoryItem } from "./src/components/CategoryItem";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Restaurants  from "../components/Restaurants";
export default function HomeScreen() {
  const commonCategories = [
    {
      name: "Burger",
      image: require("../assets/images/burger.png"),
    },
    {
      name: "Pizza",
      image: require("../assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      image: require("../assets/images/cake.png"),
    },
    {
      name: "Drinks",
      image: require("../assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      image: require("../assets/images/steak.png"),
    },
    {
      name: "Pasta",
      image: require("../assets/images/pasta.png"),
    },
  ];

  const [currentCateg, setCurrentCateg] = useState("Burger")

  return (
    <View style={styles.container} >
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
      <Restaurants term={currentCateg}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(253,253,253)",
  },
  header1: {
    fontSize: 35,
    marginTop: 60,
    marginHorizontal: 25,
  },
  header2: {
    fontSize: 40,
    marginHorizontal: 25,
    fontWeight: "bold",
  },
});


