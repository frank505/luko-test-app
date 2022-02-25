import { fireEvent, render, waitFor } from '@testing-library/react-native';
import  React from 'react';
import { NativeBaseTestWrapper } from '../../jest/NativeBaseTestWrapper';
import CustomTextArea from './CustomTextArea';









const renderComponent = () =>
{
  return render(
      NativeBaseTestWrapper(
        <CustomTextArea
        type='text'
        onChangeText={()=>{}}
         nameProperty={''} 
        inputValue={'sss'} 
        isInvalid={false}
        />
      )
   
  );
}

describe('loads component properly', () => {

test('renders app', async () => {
 waitFor(()=> renderComponent());
});




});

