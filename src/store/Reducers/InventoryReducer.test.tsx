import { InventoryReducer, initState } from "./InventoryReducer";
import * as InventoryActionTypes from '../actiontypes/InventoryActionTypes';
import { AnyAction } from "redux";
import { InventoryItem, InventoryReducerType } from "./types";



describe('appbar reducer', () => {

    it('init inventory', () =>
    {
       

        let initExpectedValue:InventoryReducerType = {
            inventoryList: [],
            inventoryTotalPrice: 0
        } 
       
        

        let actions:AnyAction = 
        {
          type: null,
         }

         expect(InventoryReducer(initState, actions)).toEqual(initExpectedValue);

    })


    it('item list has changed', () =>
    {
        let itemList:InventoryItem = {
            name: "ss",
            value: "ss",
            base64String: "ss"
        }

        let newStateValue:InventoryReducerType = {
            inventoryList: [itemList],
            inventoryTotalPrice: 0
        } 
       
        

        let actions:AnyAction = 
        {
          type: InventoryActionTypes.ADD_INVENTORY,
          res:itemList
         }

         expect(InventoryReducer(initState, actions)).toEqual(newStateValue);

    })

    it('count value has changed', () =>
    {
        let newStateValue:InventoryReducerType = {
            inventoryList: [],
            inventoryTotalPrice: 100
        } 

        let actions:AnyAction = 
        {
          type: InventoryActionTypes.COUNT_INVENTORY,
          res:100
         }

         expect(InventoryReducer(initState, actions)).toEqual(newStateValue);

    })




   

});
