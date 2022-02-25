import React from "react";
import {  View,Text,Image } from "react-native";
import { CURRENCY_SET } from "../../../constants";
import { styles } from "../styles";
import { InventoryListParam } from "../types";





 const InventoryList:React.FC<InventoryListParam> = ({list}) =>
{
     

  return (
    <View style={styles.listParentView}>
        <Image
        style={styles.imageStyle}
        source={{uri:list.base64String}}
        />
            <View 
            style={styles.textParentView}>
            <Text
            numberOfLines={2}
            ellipsizeMode={'tail'}
            style={styles.nameText}
            >{list.name}</Text>
          <Text style={styles.currencyStyles}>
                {CURRENCY_SET+""+list.value}</Text>
            </View>
           
       
    </View>
  );
}



export default InventoryList;
