import { render, waitFor,RenderAPI,fireEvent } from '@testing-library/react-native';
import  React from 'react';
import BottomTabNavigator from './BottomNavigator';
import { NavigationContainer } from "@react-navigation/native";
import {Provider} from 'react-redux';
import { store } from '../store/store';








const renderComponent = ():RenderAPI =>
{
  return render(
    <Provider store={store}>
     <NavigationContainer>
            <BottomTabNavigator/>
      </NavigationContainer>
    </Provider>
    

  );
}




describe('loads component properly', () => {

    
test('renders app', async () => {
 waitFor(()=> renderComponent());

});


});

