import { SetStateAction } from 'react';
export interface AddItemFormTypes{
    name:string,
    value:string,
    base64String:string,
    description?:string
}


export type ImageSelectorParams = {
    base64String:string,
    setBase64String:(name:string) => SetStateAction<any>
}