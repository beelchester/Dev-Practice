import { FlatList } from "react-native";
import { CategoryItem } from "./CategoryItem";
export default function Categories({commonCategories, changeCateg,currentCateg}){
  return(
    <FlatList
    // flatlist is used for multiple cards "providing" it props and iterating over array of objects of data */}
        data={commonCategories}
        renderItem={({ item, index }) => {
          return (
            <CategoryItem
              name={item.name}
              image={item.image}
              index={index}
              length={commonCategories.length}
              active={item.name.toLowerCase()==currentCateg.toLowerCase()}
              changeCateg = {() => changeCateg(item.name)}
            />
          );
        }}
        // horizontal = {true}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name} //to set key, like in react
      />)
}