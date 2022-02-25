import React from "react";
import {  View,FlatList } from "react-native";
import { Title } from "../../components/Title";
import { RootTabScreenProps } from "../../navigation/types";
import InventoryList from "./childcomponents/InventoryList";
import {styles} from './styles';
import {useDispatch,useSelector} from 'react-redux';
import { RootState } from '../../store/Reducers/RootReducer';
import { InventoryItem } from "../../store/Reducers/types";



 const InventoryScreen:React.FC<RootTabScreenProps<"Inventory">> = 
 ({navigation,route}) =>
{
     const handleAddButtonPress = () => navigation.navigate("AddItem");
     const inventoryLists = useSelector((state:RootState) => state.inventory.inventoryList);


  

  return (
    <View style={styles.container} testID='ssss'>
        <Title onButtonPress={handleAddButtonPress}
        testID="goToAddItemPage"
        >{route.name}</Title>
      
        <View style={{marginTop:25}}>
          {
             <FlatList
            columnWrapperStyle={{justifyContent: 'space-between'}}
            data={inventoryLists}
            keyExtractor={(item, index) => index.toString()}
            horizontal={false}
            numColumns={2}
            renderItem={({item, index}) =>
            <InventoryList key={index} list={item} />
            }
          />   
          }
         
        </View>

    </View>
  );
}



export default InventoryScreen;
