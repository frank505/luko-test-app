import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../../components/Button";
import { RootTabScreenProps } from "../../navigation/types";
import AddItemForm from "./childcomponents/AddItemForm";
import { styles } from "./styles";


 const  AddItemScreen:React.FC<RootTabScreenProps<"AddItemScreen">> = ({navigation}) =>
{

  return (
        <View style={styles.container}>  
          <AddItemForm/>
        </View>
      );
}

export default AddItemScreen;




