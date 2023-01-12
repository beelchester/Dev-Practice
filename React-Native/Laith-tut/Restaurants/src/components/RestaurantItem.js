import { Text, View, StyleSheet, Image} from "react-native";
import { elevation } from "./common/styles";
export default function RestaurantItem({item}) {
 
  return (
           <View style={[styles.elevation,styles.item]} >
    <Image style={styles.image} source={{uri:item.photo.images?.medium.url}}/>
    <View style={styles.infoContainer}>
    <Text style={styles.header}>{item?.name}</Text>
        <View style={styles.info}>
        <Text style={styles.rating}>{item?.rating}</Text>
        <Text style={styles.money}>{item?.price_level}</Text>
    </View>
        </View>
      </View>)}
      
const styles = StyleSheet.create({
  elevation,
  item: {
      backgroundColor:"white",
      height:100,
      alignSelf:"stretch",
      borderRadius:50,
      marginVertical:10,
      flexDirection:"row",
      alignItems:"center"
  },
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 400,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  info: {
    fontWeight: "bold",
    flexDirection: "row",
  },
  rating: {
    marginRight: 20,
  },
  money: {
    color: "gold",
  },
});
