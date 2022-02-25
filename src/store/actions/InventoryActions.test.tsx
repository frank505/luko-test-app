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
    

    store.dispatch(InventoryActions.AddInventoryAction(res));
         
       expect(store.getState().inventory.inventoryList[0]).toEqual(res);

 })  


 test('count inventory', ()=>
 {
    const count:number = 1000;

    store.dispatch(InventoryActions.setTotalPriceAction(count));
         
       expect(store.getState().inventory.inventoryTotalPrice).toEqual(count);

 })  

   

});
