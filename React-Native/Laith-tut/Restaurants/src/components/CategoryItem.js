import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
// Touchable opacity to handle touch event, we can also use Button but it is limited
import { elevation } from "./common/styles";
export const CategoryItem = ({ name, image, index, length,active,changeCateg }) => {
  return (
    <TouchableOpacity onPress={changeCateg}>
    <View
      style={[
        styles.container,
        styles.elevation,
        index == 0 ? { marginLeft: 25 } : { marginLeft: 15 },
        index == length - 1 && { marginRight: 25 },
        active
          ? { backgroundColor: "rgb(241,186,87)" }
          : {
              backgroundColor: "white",
            },
      ]}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.header}>{name}</Text>
    </View>
</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:"rgb(241,186,87)",
    // backgroundColor: "white",
    marginVertical: 15,
    // marginHorizontal:15,
  },
  elevation,
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  header: {
    fontWeight: "bold",
  },
});
