import { NavigationContainer } from '@react-navigation/native';
import { render, RenderAPI } from '@testing-library/react-native';
import  React from 'react';
import { NativeBaseTestWrapper } from '../../../jest/NativeBaseTestWrapper';
import AddItemScreen from './AddItemScreen';
import { Provider } from 'react-redux';
import { store } from '../../store/store';


const  renderComponent = ():RenderAPI =>
{
    let navigationProps:undefined|any = {};
  return render(
    <Provider store={store}>
         <NavigationContainer>
   {NativeBaseTestWrapper(
    <AddItemScreen 
          route={{
            name: "AddItemScreen",
            key: ''
          }} navigation={navigationProps}    /> )}
    </NavigationContainer>
    </Provider>
   
   
  );

}




describe('AddItemScreen', () => {


test('renders app',  () => {
 renderComponent();

});



});

