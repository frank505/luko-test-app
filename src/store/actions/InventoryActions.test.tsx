import * as InventoryActions from "./InventoryActions";
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { InventoryItem } from "../Reducers/types";
import { InventoryDispatchType } from "./types";
import { ADD_INVENTORY } from "../actiontypes/InventoryActionTypes";

const middlewares = [thunk]
const mockStore = createMockStore(middlewares)


describe('inventoryActions', () => {

 test('addinventory action', ()=>
 {
    const res:any = {inventoryList: [] };

    const expectedActions:any =  
       [ { type: ADD_INVENTORY , res } ]
         
      const store = mockStore({ inventoryList: [] })
      
        jest.spyOn(InventoryActions,'AddInventoryAction').mockReturnValue
        (
         store.dispatch({ type:ADD_INVENTORY , res})
        );
        
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getState()).toEqual(res);

 })  


   

});
