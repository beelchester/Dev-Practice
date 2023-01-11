import { Text, View, StyleSheet, Image,FlatList } from "react-native";
import useRestaurants from "../hooks/useRestaurants";
import { useEffect, useState } from "react";
export default function Restaurants() {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();
  useEffect(() => {
    searchRestaurants();
  }, []);
  // console.log({data:data?.data[0].name,loading,error})
  const burgerList = data?.data.map((item) => item.name != undefined ).slice(0, 6);
  return (
    <View>
      <Text>Top Restaurants</Text>
      {burgerList}
      <FlatList
      data={burgerList}
      renderItem={({item})=>
        <View >
    {/* <Image style={{width:100,height:100}} source={{uri:item.photo.images?.medium.url}}/> */}
    <Text>{item?.name}</Text>
      </View>
      } 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: "column",
  },
});
