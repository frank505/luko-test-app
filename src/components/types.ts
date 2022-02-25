import { Ionicons } from '@expo/vector-icons';
import { StyleProp } from 'react-native';
import React, { SetStateAction } from 'react';



export type TextFieldParams = {
onChangeText:(name:string) => void,
type:string,
nameProperty:string,
inputValue:any,
label?:string,
InputRightElement?:React.ReactElement,
InputLeftElement?:React.ReactElement,
labelStyle?:StyleProp<any>,
inputStyle?:StyleProp<any>,
handleBlur?:SetStateAction<any>,
isInvalid:boolean,
errMsg?:string|null,
placeHolder?:string,
testID?:string
}


export type TitleParams = {
    children: string;
    testID?:string,
    onButtonPress?: () => void;
}

export type TabBarIconParams = {
    name: React.ComponentProps<typeof Ionicons>["name"];
    color: string;

}


export type DynamicActionSheets  = {
    Function:(params?:any) => void,
    iconName:any,
    nameProperty:string
}


export  type CustomActionSheetParams = {
 isOpen:boolean,
 onClose:SetStateAction<any>,
 DynamicActionSheets:Array<DynamicActionSheets>
}
