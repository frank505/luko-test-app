import { useNavigation } from '@react-navigation/native';
import { render, waitFor } from '@testing-library/react-native';
import  React from 'react';
import  FallbackScreen  from './FallBackScreen';






const renderComponent = () =>
{

let navigationProps:undefined|any = {};

  return render(
    <FallbackScreen  route={{
          name: "Inventory",
          key: 'aa'
      }} navigation={navigationProps} 
      
      />
  );
}

describe('loads component properly', () => {

test('renders app', async () => {
 waitFor(()=> renderComponent());

});


});

