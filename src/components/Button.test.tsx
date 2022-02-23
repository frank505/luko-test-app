import { render, waitFor } from '@testing-library/react-native';
import  React from 'react';
import Button from './Button';





const renderComponent = () =>
{
  return render(
    <Button title={'page'}/>
  );
}

describe('loads component properly', () => {

test('renders app', async () => {
 waitFor(()=> renderComponent());

});


});

