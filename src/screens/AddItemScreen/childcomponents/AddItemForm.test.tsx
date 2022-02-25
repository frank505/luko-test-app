import  React, { ReactInstance } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { cleanup, fireEvent, render, RenderAPI, waitFor } from "@testing-library/react-native"
import { NativeBaseTestWrapper } from '../../../../jest/NativeBaseTestWrapper';
import { Alert, View } from 'react-native';
import AddItemForm from './AddItemForm';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import * as ExpoImagePicker from 'expo-image-picker'
import {ReactTestInstance} from 'react-test-renderer'
import { isDisabled } from '../../../../jest/setup';
import * as reduxContainer from 'react-redux';



jest.mock('expo-image-picker', () => {
    const actualPicker = jest.requireActual('expo-image-picker');
    return {
      ...actualPicker,
      requestCameraPermissionsAsync: jest.fn().mockResolvedValueOnce({granted:true}),
      launchCameraAsync: jest.fn().mockResolvedValueOnce({cancelled:false,base64:'ssss'}),
    };
  });



const middlewares = [thunk]
const mockStore = createMockStore(middlewares)




const mockedNavigate = jest.fn();
const mockGoBack = jest.fn()
const mockDispatch = jest.fn()



jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      goBack: mockGoBack
    }),
  };
});










type setupType  = {
    getByTestId?:any,
    findByTestId?:any,
    getByText?:any,
    cancelButton:any,
    nameField:any,
    valueField:any,
    descriptionField:any,
    submitButton:any,
}

 const renderComponent = ():RenderAPI =>
{
  return render
  (   
          <Provider store={store}>
             <NavigationContainer>
          {NativeBaseTestWrapper(<AddItemForm />)}
          </NavigationContainer>
          </Provider>        
  );

}







const setup = ():setupType =>
{
    const {getByTestId,findByTestId,getByText} = renderComponent();
    const nameField = getByTestId('nameField');
    const valueField = getByTestId('valueField');
    const descriptionField = getByTestId('descriptionField');
    const submitButton = getByTestId('SubmitButton');
    const cancelButton = getByTestId('CancelButton');


  
    return {
        getByTestId,
        findByTestId,
        getByText,
        cancelButton,
        nameField,
        valueField,
        descriptionField,
        submitButton
    }
    

}











describe('LoginForm Test', () => {
    
  beforeEach(()=>
  {
    cleanup();
  });


  it('renders component properly', async()=>{
    await waitFor(()=> renderComponent());
  });

  it('cancel button is clicked',()=>
  {
      const {cancelButton} = setup();
      fireEvent.press(cancelButton);
      expect(mockGoBack).toHaveBeenCalledTimes(1) 
      
  });

  it('submit form with correct data', async()=>
  {
  
    const {nameField,valueField,descriptionField,getByTestId,submitButton} = setup();
    fireEvent.changeText(nameField,'desmond');
    fireEvent.changeText(valueField,'2000000000');
    fireEvent.changeText(descriptionField, 'ssss');
    jest.spyOn(Alert, 'alert');
    fireEvent.press(getByTestId('noBase64StringTestId'));
    expect(isDisabled(submitButton)).toEqual(true);  //button is still disabled
    await  waitFor(()=>{ expect(Alert.alert).toHaveBeenCalledTimes(1) }); 
   //click on the camera button
   let alertMock:any = Alert.alert;
   alertMock.mock.calls[0][2][1].onPress(); 
    await waitFor(()=> expect(ExpoImagePicker.requestCameraPermissionsAsync).toHaveBeenCalled());
     expect(isDisabled(submitButton)).toEqual(false);  //button is now enabled as all inputs have been entered
     jest.spyOn(reduxContainer,'useDispatch').mockImplementationOnce(()=>mockDispatch);
     fireEvent.press(submitButton);
     await  waitFor(()=>{ expect(Alert.alert).toHaveBeenCalledTimes(2) }); //return alert with error message for requesting more than you can use  
     fireEvent.changeText(valueField,'200'); //reduce amount to below TRANSACTION_LIMIT
     fireEvent.press(submitButton);
    await waitFor(()=> expect(mockDispatch).toBeCalled());
  })



  

})
