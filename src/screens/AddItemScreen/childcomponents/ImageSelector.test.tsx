import { fireEvent, render, RenderAPI, waitFor } from '@testing-library/react-native';
import  React, { ReactInstance } from 'react';
import { Alert } from 'react-native';
import { NativeBaseTestWrapper } from '../../../../jest/NativeBaseTestWrapper';
import * as ExpoImagePicker from 'expo-image-picker'
import ImageSelector from './ImageSelector';



jest.mock('expo-image-picker', () => {
    const actualPicker = jest.requireActual('expo-image-picker');
    return {
      ...actualPicker,
      requestCameraPermissionsAsync: jest.fn().mockResolvedValueOnce({granted:true}),
      launchCameraAsync: jest.fn().mockResolvedValueOnce({cancelled:false,base64:'sss'}),
      requestMediaLibraryPermissionsAsync:jest.fn().mockResolvedValueOnce({granted:true}),
      launchImageLibraryAsync: jest.fn().mockResolvedValueOnce({cancelled:false}),
    };
  });


let mockBase64StringValue:string = '';
type setupType  = {
    base64StringAbsentView:ReactInstance | null,
    base64StringPresentView:ReactInstance | null,
    removeBase64String:ReactInstance | null,
    getByTestId?: any,
    findByText?:any,
    queryByTestId?:any,
    findByTestId?:any
}


const  renderComponent = ():RenderAPI =>
{
    let navigationProps:undefined|any = {};

  return render(
    NativeBaseTestWrapper( 
        <ImageSelector base64String={mockBase64StringValue} 
        setBase64String={(name: string) => { return mockBase64StringValue =  name } } />
    )
  );
}


const setup = ():setupType =>
{
    const {queryByTestId,getByTestId,findByText,findByTestId} = renderComponent();
    const base64StringAbsentView = queryByTestId('noBase64StringTestId');
    const base64StringPresentView = queryByTestId('base64StringPresentTestId');
    const removeBase64String = queryByTestId('removeBase64String');
    
    return {
        base64StringAbsentView,
        base64StringPresentView,
        removeBase64String,
        getByTestId,
        findByText,
        queryByTestId,
        findByTestId
    }

}



describe('AddItemScreen', () => {

    beforeEach(()=>{
        mockBase64StringValue = '';
    })

test('renders app',  () => {
 renderComponent();

});

test('is base64 string variable empty', ()=>{
const {base64StringAbsentView,base64StringPresentView} = setup();
 expect(base64StringAbsentView).not.toBeNull();
 expect(base64StringPresentView).toBeNull();
})

test('is base64 string not empty', ()=>{
    mockBase64StringValue = 'ss';
    const {base64StringAbsentView,base64StringPresentView} = setup();
    expect(base64StringAbsentView).toBeNull();
    expect(base64StringPresentView).not.toBeNull();
})

test('load optional alert and use camera', async()=>
{  
    jest.spyOn(Alert, 'alert');
    const {getByTestId} = setup();
    let loadOptionAlertTrigger = getByTestId('noBase64StringTestId');
    fireEvent.press(loadOptionAlertTrigger);
   await  waitFor(()=>{ expect(Alert.alert).toHaveBeenCalled() }); 
   //click on the camera button
   let alertMock:any = Alert.alert;
   alertMock.mock.calls[0][2][1].onPress(); 
 await waitFor(()=> expect(ExpoImagePicker.requestCameraPermissionsAsync).toHaveBeenCalled()) 
  expect(ExpoImagePicker.launchCameraAsync).toBeCalled();
//    
});


test('load optional alert and use gallery', async()=>
{  
    jest.spyOn(Alert, 'alert');
    const {getByTestId} = setup();
    let loadOptionAlertTrigger = getByTestId('noBase64StringTestId');
    fireEvent.press(loadOptionAlertTrigger);
   await  waitFor(()=>{ expect(Alert.alert).toHaveBeenCalled() }); 
   //click on the gallery
   let alertMock:any = Alert.alert;
   alertMock.mock.calls[0][2][2].onPress(); 
 await waitFor(()=> expect(ExpoImagePicker.requestMediaLibraryPermissionsAsync).toHaveBeenCalled()) 
  expect(ExpoImagePicker.launchImageLibraryAsync).toBeCalled();   
});

test('remove base64 string', async()=>
{    
    mockBase64StringValue = 'sss'; //set mockString so that the removeBase64String button is visible
    const {getByTestId,removeBase64String,findByTestId} = setup();
    expect(removeBase64String).not.toBeNull();
  fireEvent.press(getByTestId('removeBase64String')) ;
  expect(mockBase64StringValue).toBe(''); //check to see if the string is now empty when removeBase64button is pressed
});






});

