import React,{useEffect, useState} from 'react';
import { AddItemFormTypes } from '../types';
import { View ,Text, Alert, KeyboardAvoidingView,Platform} from 'react-native';
import { styles } from '../styles';
import CustomTextField from '../../../components/CustomTextField';
import CustomTextArea from '../../../components/CustomTextArea';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import ImageSelector from './ImageSelector';
import { validation } from '../validations/AddItemFormValidation';
import {Dispatch} from 'redux';
import {useDispatch,useSelector} from 'react-redux';
import { AddInventoryAction, setTotalPriceAction } from '../../../store/actions/InventoryActions';
import { RootState } from '../../../store/Reducers/RootReducer';
import { CURRENCY_SET, TRANSACTION_LIMIT } from '../../../constants';
import { ScrollView } from 'native-base';





const AddItemForm:React.FC = () =>
{

   const navigation = useNavigation();
   const dispatch:Dispatch<any> = useDispatch();
   const inventoryTotalCost = useSelector((state:RootState) => state.inventory.inventoryTotalPrice);
   

   const [fields, setFields] = useState<AddItemFormTypes>({
    name:'',
    value: '',
    base64String:'',
    description:''
    });

    const [disableAddBtn,setDisableAddBtn] = useState<boolean>(true);

   useEffect(()=>
   {
    validation(fields) == true ? setDisableAddBtn(false) : setDisableAddBtn(true)

   },[fields])



  
      


  const onSubmitData = ():void =>
   {
    
     let newPrescribedTotal:number = inventoryTotalCost +  parseInt(fields.value);

     if(newPrescribedTotal > TRANSACTION_LIMIT)
     {
      return Alert.alert('Oops! Transaction Error',
      `you cannot add this new item as the sum of the prices of your current item with your total price exceeds your transaction limit of ${CURRENCY_SET}${TRANSACTION_LIMIT}`);
     }

     dispatch(AddInventoryAction(fields));

     let newTotal:number = inventoryTotalCost + parseInt(fields.value);

     dispatch(setTotalPriceAction(newTotal));

     navigation.goBack();

   }


   return (
       
  
       
     <ScrollView
      style={{marginBottom:10}}
      >

      <View style={styles.buttonsContainer}>
            <Button title="Cancel"
            testID='CancelButton'
            onPress={() => navigation.goBack()} 
            />
            <Button title="Add" disabled={disableAddBtn} 
            testID='SubmitButton'
            onPress={onSubmitData} />
          </View>
   
        <ImageSelector  
        base64String={fields.base64String}
        setBase64String = {(base64String:string)=> setFields({...fields, base64String:base64String}) }
        />


       <CustomTextField 
       type='text'
      inputStyle={styles.textFields}
       label='Name'
       inputValue={fields.name}
       onChangeText={  (name:string)=> setFields({...fields, name:name})}
       nameProperty="name"
       placeHolder='Bracelet'
      isInvalid={false}
       errMsg={null} 
       testID='nameField'         
       />

   

<CustomTextField 
      type='text'
      inputStyle={styles.textFields}
       label='Value'
       inputValue={fields.value}
       onChangeText={  (value:string)=> { setFields({...fields, value:value})}}
       nameProperty="value"
       placeHolder='700'
      isInvalid={false}
       errMsg={null}  
       InputRightElement={<Text style={{padding:10}}>{CURRENCY_SET}</Text>}
       testID='valueField'       
       />


      <CustomTextArea
       onChangeText={ (description:string)=>  setFields({...fields, description:description})}
      type='text'
      inputStyle={styles.textArea}
       label='Description'
       inputValue={fields.description}
       nameProperty="description"
       placeHolder='Optional'
      isInvalid={false}
       errMsg={null}       
       testID='descriptionField'   
       />
          
          </ScrollView>
         
      
        
   );
}


export default AddItemForm;



