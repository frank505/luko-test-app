import { NavigationContainer } from '@react-navigation/native';
import { render, RenderAPI } from '@testing-library/react-native';
import  React from 'react';
import { NativeBaseTestWrapper } from '../../../../jest/NativeBaseTestWrapper';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import InventoryList from './InventoryList';


const  renderComponent = ():RenderAPI =>
{
    let navigationProps:undefined|any = {};
  return render(
    <Provider store={store}>
         <NavigationContainer>
   {NativeBaseTestWrapper( <InventoryList list={{
       name: 'sss',
       value: 'aaa',
       base64String: 'sss',
       description: undefined
   }} />  )}
    </NavigationContainer>
    </Provider>
   
   
  );

}




describe('InventoryList', () => {


test('renders app',  () => {
 renderComponent();

});



});

