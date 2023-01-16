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
// ? npm i react-navigation react-navigation-stack
// * screens are like webpages

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';


const navigator = createStackNavigator({
Home: HomeScreen,
Restaurant : RestaurantScreen,
},
{
  initialRouteName: 'Home', // default screen
  defaultNavigationOptions: {
    headerShown: false, // to hide the header
  },
}
)


export default createAppContainer(navigator);