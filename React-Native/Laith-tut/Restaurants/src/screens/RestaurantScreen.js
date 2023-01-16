import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import yelp from "../api/yelp";

function RestaurantScreen({ navigation }) {
  const id = navigation.getParam("id"); //this is the id of the restaurant that we are trying to fetch
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const dimensions = Dimensions.get("window"); // this is the dimension of the screen of the device
  const imageWidth = dimensions.width;
  const imageHeight = Math.round((dimensions.width * 9) / 16); 

  const fetchRestaurant = async () => {
    setResults({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const response = await yelp.get(`/${id}`); //this is the id of the restaurant that we are trying to fetch

      setResults({
        data: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResults({
        data: null,
        loading: false,
        error: "something went wrong",
      });
    }
  };

  return (
    <View style={styles.container}>
      {results.data && (
        <FlatList
          data={results.data.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            console.log({ item });
            return (
              <Image
                style={{ height: imageHeight, width: imageWidth}}
                source={{ uri: item }}
              />
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 marginVertical: "20%",
  }
});

export default RestaurantScreen;
