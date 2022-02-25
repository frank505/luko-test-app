import { render, waitFor } from '@testing-library/react-native';
import  React from 'react';
import Navigation from '.';
import { store } from '../store/store';
import {Provider} from 'react-redux';



const renderComponent = () =>
{
  return render(
    <Provider store={store}>
      <Navigation/>
    </Provider>
   
  );
}

describe('loads component properly', () => {

test('renders app', async () => {
 waitFor(()=> renderComponent());

});


});

