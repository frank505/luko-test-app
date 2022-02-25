import { AddItemFormTypes } from './../types';
import { validation } from './AddItemFormValidation';




describe('Name of the group', () => {
   
    
 it('validate input data and returns true', ()=>
 {
    const values:AddItemFormTypes = 
    {
     name:"desmond",
     value:'7000',
     base64String:"sss",
    }

    const validationRes = validation(values);
    expect(validationRes).toBe(true);
 });
 
 

 it('returns error object if all fields are empty', ()=>
 {
    const values:AddItemFormTypes = 
    {
        name:"",
        value:'',
        base64String:"",
    }
    const validationRes:any = validation(values);
    expect(validationRes.name).not.toBe('');
    expect(validationRes.value).not.toBe('');
    expect(validationRes.base64String).not.toBe('');
   
 });




});