import React,{useEffect, useState} from 'react';
import { Input,FormControl, WarningOutlineIcon } from 'native-base';
import { AddItemFormTypes } from '../types';
import { colors } from '../../../theme/colors';
import { Image, View ,Text} from 'react-native';
import { styles } from '../styles';
import CustomTextField from '../../../components/CustomTextField';
import CustomTextArea from '../../../components/CustomTextArea';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import ImageSelector from './ImageSelector';
import { validation } from '../validations/AddItemFormValidation';





const AddItemForm:React.FC = () =>
{

   const navigation = useNavigation();

   const [fields, setFields] = useState<AddItemFormTypes>({
    name:'',
    value: '',
    base64String:'',
    description:''
    });

    const [disableAddBtn,setDisableAddBtn] = useState<boolean>(true);

   useEffect(()=>
   {
    validation(fields)==  true ? setDisableAddBtn(false) : setDisableAddBtn(true)

   },[fields])


  
      


  const onSubmitData = ():void =>
   {
    console.log('sssss');
   }


   return (
     
         <View>
       

      <View style={styles.buttonsContainer}>
            <Button title="Cancel" onPress={() => navigation.goBack()} />
            <Button title="Add" disabled={disableAddBtn}  onPress={onSubmitData} />
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
       />


      <CustomTextArea
       onChangeText={ (description:string)=>  setFields({...fields, description:description})}
      type='text'
      inputStyle={styles.textArea}
       label='Description'
       inputValue={fields.description}
       nameProperty="description"
       placeHolder='Description'
      isInvalid={false}
       errMsg={null}          
       />
          

         </View>
      
        
   );
}


export default AddItemForm;



