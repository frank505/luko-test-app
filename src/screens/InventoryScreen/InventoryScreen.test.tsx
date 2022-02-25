import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import  React from 'react';
import { NativeBaseTestWrapper } from '../../../jest/NativeBaseTestWrapper';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import InventoryScreen from './InventoryScreen';


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
  


const  renderComponent = ():RenderAPI =>
{
    let navigationProps:undefined|any = {};
    let routes:any = {name:'Inventory'};
  return render(
    <Provider store={store}>
         <NavigationContainer>
   {NativeBaseTestWrapper( <InventoryScreen 
   navigation={navigationProps} 
   route={routes} /> )}
    </NavigationContainer>
    </Provider>
   
  );

}




describe('InventoryList', () => {


test('renders app',  () => {
 renderComponent();

});




});

