import { NavigationContainer, } from '@react-navigation/native';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import  React from 'react';
import { NativeBaseTestWrapper } from '../../../jest/NativeBaseTestWrapper';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import InventoryScreen from './InventoryScreen';
import * as InventoryActionTypes from '../../store/actiontypes/InventoryActionTypes';
import { InventoryItem } from '../../store/Reducers/types';



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
      useRoute:() =>({
        name:"Inventory"
      })
    };
  });
  




const  renderComponent = ():RenderAPI =>
{
    let res:InventoryItem = {
      name: 'desmond',
      value: '2222',
      base64String: 'aaaaaa'
    }

    store.dispatch({type:InventoryActionTypes.ADD_INVENTORY, res});

  return render(
    <Provider store={store}>
         <NavigationContainer>
   {NativeBaseTestWrapper( <InventoryScreen  /> )}
    </NavigationContainer>
    </Provider>
   
  );

}






describe('InventoryList', () => {


test('renders app',  () => {
 renderComponent();

});

test('test handleAddButtonPress', ()=>
{
   const {getByTestId} = renderComponent();
   const handleButton = getByTestId('goToAddItemPage');
   fireEvent.press(handleButton);
   expect(mockedNavigate).toHaveBeenCalled();

});



test('testing elements rendered in flatlist', () =>{
    const {queryByTestId} =   renderComponent();
  const itemList = queryByTestId('inventory-0');
  expect(itemList).not.toBeNull();
})



});

