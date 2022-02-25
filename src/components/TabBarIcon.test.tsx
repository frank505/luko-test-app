import { render, waitFor } from '@testing-library/react-native';
import  React from 'react';
import {TabBarIcon} from './TabBarIcon';






const renderComponent = () =>
{
  return render(
    <TabBarIcon name={'search'} color={''}/>
  );
}

describe('loads component properly', () => {

test('renders app', async () => {
 waitFor(()=> renderComponent());
});


});

