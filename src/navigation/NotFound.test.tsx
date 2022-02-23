import { render, waitFor } from '@testing-library/react-native';
import  React from 'react';
import { NotFound } from './NotFound';






const renderComponent = () =>
{
  return render(
    <NotFound/>
  );
}

describe('loads component properly', () => {

test('renders app', async () => {
 waitFor(()=> renderComponent());

});


});

