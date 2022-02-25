import { render, waitFor,RenderAPI,fireEvent } from '@testing-library/react-native';
import  React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from './RootNavigator';
import {Provider} from 'react-redux';
import { store } from '../store/store';








const renderComponent = ():RenderAPI =>
{
  return render(
    <Provider store={store}>
 <NavigationContainer>
            <RootNavigator/>
      </NavigationContainer>
    </Provider>
  );
}




describe('loads component properly', () => {

    
test('renders app', async () => {
 waitFor(()=> renderComponent());

});


});

