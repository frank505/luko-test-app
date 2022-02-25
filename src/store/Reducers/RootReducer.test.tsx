import { createStore, Store } from "redux";
import {initState as InventoryReducer} from "./InventoryReducer";
import {RootReducer} from "./RootReducer";


describe('Root Reducer Suite', () => {

    it('correct setup for inventoryReducer in the root reducer', () => {

      let store:Store = createStore(RootReducer)
      expect(store.getState().inventory).toEqual(InventoryReducer);

    });


  });


