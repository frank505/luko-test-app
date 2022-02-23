import { render, waitFor,RenderAPI,fireEvent } from '@testing-library/react-native';
import  React from 'react';
import BottomTabNavigator from './BottomNavigator';
import { NavigationContainer } from "@react-navigation/native";








const renderComponent = ():RenderAPI =>
{
  return render(
      <NavigationContainer>
            <BottomTabNavigator/>
      </NavigationContainer>

  );
}




describe('loads component properly', () => {

    
test('renders app', async () => {
 waitFor(()=> renderComponent());

});


});

