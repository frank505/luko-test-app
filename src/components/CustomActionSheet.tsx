
import React, { SetStateAction } from 'react';
import { Button, Actionsheet, useDisclose,Divider } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import {CustomActionSheetParams,DynamicActionSheets} from './types';


export const CustomActionSheet:React.FC<CustomActionSheetParams> = ({
    isOpen, onClose, DynamicActionSheets
}) =>
{
    return (

            <Actionsheet isOpen={isOpen} onClose={onClose} 
            size="full"
            >

            <Actionsheet.Content >

               {DynamicActionSheets.map((item:DynamicActionSheets,index:number)=>(
                    <Actionsheet.Item
                    key={index}
                    onPress={item.Function}
                      startIcon={
                        <Ionicons name={item.iconName} size={25} color='red' />
                      }
                    >
                      <Text>
                      {
                       item.nameProperty
                      }
                    </Text>  
                      
                    </Actionsheet.Item>
               ))}
              
            

              <Divider borderColor="gray.300" />


              <Actionsheet.Item
               onPress={onClose}
               style={{alignItems:'center',alignContent:'center',justifyContent:'center'}}
               >
                 <Text style={{color:'red',fontWeight:'bold',fontSize:17}}>
                   {
                     'Close'
                   }
                
                 </Text>
              
              </Actionsheet.Item>
            </Actionsheet.Content>
          </Actionsheet>
    );
}