import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View,Modal, Alert, AlertStatic } from "react-native";
import {  ImagePicker,ImagePickerResult } from "../../../sdk/ImagePicker";
import { styles } from "../styles";
import { ImageSelectorParams } from "../types";





 const  ImageSelector:React.FC<ImageSelectorParams> = ({
     base64String,setBase64String
 }) =>
{


    const base64UriAttach:string = "data:image/jpeg;base64,";



const loadCamera = async():Promise<void> =>
{
   let res:ImagePickerResult = await ImagePicker.takePhoto();
   res?.cancelled == false && setBase64String(base64UriAttach+""+res?.base64);
}

const loadGallery = async():Promise<void> =>
{
  let res:ImagePickerResult = await ImagePicker.pickImage();
  res?.cancelled == false && setBase64String(base64UriAttach+""+res?.base64);
   
}


const removeBase64String = ():void =>
{
    setBase64String('');
}

const loadOptionalAlert = () =>
{
     Alert.alert('Add Photo',
      `Please Select a Photo from your gallery or take a picture with your camera`,
            [
              {text: 'Cancel', 
               style: 'cancel'}, 
               {
              text: 'From Camera',
              onPress: () => loadCamera()
            },
            {
                text: 'From Gallery',
                onPress: () => loadGallery()
              }
            ], {cancelable: false}
          );
}



  return (
      base64String==''?

    <TouchableOpacity style={styles.base64ViewStyle}
    testID='noBase64StringTestId'
    onPress={loadOptionalAlert}
    >
           <Image 
           source={require('../../../../assets/ImageIcon.png')}
           />
  
           <Text style={{height:24,fontSize:17,fontWeight:'bold',marginTop:4}}>Add Photo</Text>
  
       </TouchableOpacity>
       : 
         <View 
         style={styles.base64ViewStyle}
         testID="base64StringPresentTestId"
         >
          <Image
          style={styles.imageWithBase64String}
           source={{uri:base64String}}
           />
           <TouchableOpacity 
           testID="removeBase64String"
           onPress={removeBase64String}
           style={styles.deleteButtonImage}>
           <Ionicons name="trash" color={'white'} size={15}/>
           </TouchableOpacity>
           
         </View>
          
   
      );
}

export default ImageSelector;




