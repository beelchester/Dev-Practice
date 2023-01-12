import { Text, View, StyleSheet, Image,FlatList, ActivityIndicator } from "react-native";
//activityindicator is the spinner
import useRestaurants from "../hooks/useRestaurants";
import { useEffect, useState } from "react";
import { elevation } from "./common/styles";
import RestaurantItem from "./RestaurantItem";
export default function Restaurants() {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();
  useEffect(() => {
    searchRestaurants();
  }, []);
  // console.log({data:data?.data[0].name,loading,error})
  const burgerList = data?.data.slice(0, 11);

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
      data={burgerList}
      keyExtractor={item=>item.id}
      style={{height:1000}}
      renderItem={({item})=>{
       if(item.name!=undefined){
         return(
          <RestaurantItem item={item}/>
          )}
        } 
      } 
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
 
});
