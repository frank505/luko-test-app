import { AddItemFormTypes } from './../types';
import { validateObject } from "../../../helpers/validationHelpers";







export const validation = (values:AddItemFormTypes): object | boolean =>
{

     const errors:AddItemFormTypes|any = {};
     errors.name =  values.name == ''? 'Name Field is required': '';
     errors.value = values.value=='' ||  isNaN(Number(values.value))? 'All values Must Be numbers':''; 
     errors.base64String = values.base64String == '' ? 'Please Select an Image':'';

     console.log(errors);

     const validateObj = validateObject(errors);

     console.log(validateObj);
    
     return validateObj == false? true: errors;
}