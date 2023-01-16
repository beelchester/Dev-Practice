import { Text, View, StyleSheet, Image,FlatList, ActivityIndicator, TouchableOpacity, ScrollView } from "react-native";
//activityindicator is the spinner
import useRestaurants from "../hooks/useRestaurants";
import { useEffect, useState } from "react";
import { elevation } from "./common/styles";
import RestaurantItem from "./RestaurantItem";
export default function Restaurants({term}) {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();
  useEffect(() => {
    searchRestaurants(term);
  }, [term]);
  if(loading){
    return(<ActivityIndicator size="large" marginVertical={30}/> )
  }

  if(error){
    return(<View>
      <Text>{error}</Text>
    </View>)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
  
<FlatList
      data={data}
      keyExtractor={(restaurant) => restaurant.id}
      renderItem={({ item, index }) => (
        // <Text>{item.name}</Text>
        // <TouchableOpacity onPress={() => console.log("pressed")}>
        <RestaurantItem restaurant={item} />
        // </TouchableOpacity>
        )}
      />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});
