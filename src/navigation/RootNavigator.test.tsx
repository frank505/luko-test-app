import { render, waitFor,RenderAPI,fireEvent } from '@testing-library/react-native';
import  React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from './RootNavigator';








const renderComponent = ():RenderAPI =>
{
  return render(
      <NavigationContainer>
            <RootNavigator/>
      </NavigationContainer>

  );
}




describe('loads component properly', () => {

    
test('renders app', async () => {
 waitFor(()=> renderComponent());

});


});

