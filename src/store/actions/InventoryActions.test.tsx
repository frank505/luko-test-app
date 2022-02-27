import * as InventoryActions from "./InventoryActions";
import { InventoryItem } from "../Reducers/types";
import { store } from "../store";





describe('inventoryActions', () => {

 test('addinventory action', ()=>
 {
    const res:InventoryItem = {
       name: "ss",
       value: "ss",
       base64String: "aaa",
       description:undefined
    }
   
    const actions:any = InventoryActions.AddInventoryAction(res);
 
    store.dispatch(actions);
         
       expect(store.getState().inventory.inventoryList[0]).toEqual(res);

 })  


 test('count inventory', ()=>
 {
    const count:number = 1000;
    
    const actions:any = InventoryActions.setTotalPriceAction(count);
    
    store.dispatch(actions);
         
       expect(store.getState().inventory.inventoryTotalPrice).toEqual(count);

 })  

   

});


