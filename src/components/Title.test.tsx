import { render, waitFor } from '@testing-library/react-native';
import  React from 'react';
import { Title } from './Title';








const renderComponent = () =>
{
  return render(
    <Title children={"hello"} />
  );
}

describe('loads component properly', () => {

test('renders app', async () => {
 waitFor(()=> renderComponent());
});


});

