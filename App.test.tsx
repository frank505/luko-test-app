import App from './App';
import { render, RenderAPI } from '@testing-library/react-native';
import  React from 'react';


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
    <App/>
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

