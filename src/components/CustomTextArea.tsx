import React, { SetStateAction } from 'react';
import { TextArea,  FormControl, WarningOutlineIcon } from 'native-base';
import {TextFieldParams} from './types';
import { colors } from '../theme/colors';



const CustomTextArea:React.FC<TextFieldParams> = ({
     type,
     inputValue,
     label,
    inputStyle,
    handleBlur,
   errMsg,
   isInvalid,
    nameProperty,
    placeHolder,
    testID,
    labelStyle,
    onChangeText
}) =>
{
   return (
    <FormControl isInvalid={isInvalid} >
    <FormControl.Label style={labelStyle}>{label}</FormControl.Label>    
     <TextArea
    h={inputStyle?.height}
   type={!type?"text":type}
   borderWidth={inputStyle?.borderWidth}
   borderRadius={inputStyle?.borderRadius}
   backgroundColor={inputStyle?.backgroundColor}
   borderColor={inputStyle?.borderColor}
   lineHeight={inputStyle?.lineHeight}
   isRequired={true} 
  placeholder={placeHolder}
  placeholderTextColor={colors.mainGrey}
  onChangeText={onChangeText}
onBlur={handleBlur == void 0  ? null: handleBlur(nameProperty) }               
value={inputValue}
keyboardAppearance="default"
testID={testID}
    />
<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
    {errMsg}
  </FormControl.ErrorMessage>

     </FormControl>
   );
}


export default CustomTextArea;