import { render, RenderAPI } from '@testing-library/react-native';
import  React from 'react';
import { NativeBaseTestWrapper } from '../../../jest/NativeBaseTestWrapper';
import AddItemScreen from './AddItemScreen';



const  renderComponent = ():RenderAPI =>
{
    let navigationProps:undefined|any = {};
  return render(
    NativeBaseTestWrapper(
    <AddItemScreen 
          route={{
            name: "AddItemScreen",
            key: ''
          }} navigation={navigationProps}    /> )
  );

}




describe('AddItemScreen', () => {


test('renders app',  () => {
 renderComponent();

});



});

