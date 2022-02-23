import { render, waitFor } from '@testing-library/react-native';
import  React from 'react';
import Navigation from '.';




const renderComponent = () =>
{
  return render(
    <Navigation/>
  );
}

describe('loads component properly', () => {

test('renders app', async () => {
 waitFor(()=> renderComponent());

});


});

