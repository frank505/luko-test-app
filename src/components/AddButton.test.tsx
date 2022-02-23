import { render, waitFor } from '@testing-library/react-native';
import  React from 'react';
import AddButton from './AddButton';





const renderComponent = () =>
{
  return render(
    <AddButton/>
  );
}

describe('loads component properly', () => {

test('renders app', async () => {
 waitFor(()=> renderComponent());

});


});

