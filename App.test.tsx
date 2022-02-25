import App from './App';
import { render, RenderAPI } from '@testing-library/react-native';
import  React from 'react';
import {Provider} from 'react-redux';
import { store } from './src/store/store';


let mockIsLoadingFont:boolean = false;

jest.mock("expo-font", () => { 
  return { 
    useFonts: ({}) => 
  [
    mockIsLoadingFont ? true : false,
    null]}; 
});


const  renderComponent = ():RenderAPI =>
{
  return render(
    <Provider store={store}>
        <App/>
    </Provider>
  
  );
}




describe('loads component if fonts are not loaded', () => {

beforeEach(()=>
{
  mockIsLoadingFont = false;
})

test('renders app',  async() => {
const {queryByTestId} =  renderComponent();
 expect(queryByTestId('activityIndicatorFonts')).not.toBeNull() ;
});

test('load component if fonts are loaded',async()=>
{
 mockIsLoadingFont = true;
  const {queryByTestId} = renderComponent();
  let component = queryByTestId('activityIndicatorFonts');
 expect(component).toBeNull();
})

});

