import { AnyAction } from 'redux';
import * as InventoryActionTypes from '../actiontypes/InventoryActionTypes';
import { InventoryReducerType } from './types';

    export const initState:InventoryReducerType= 
    {
    inventoryList:[],
     inventoryTotalPrice:0
    }
     


   export  const InventoryReducer = 
   (state:InventoryReducerType=initState, action:AnyAction) =>
   {
        switch(action.type){
    
              case InventoryActionTypes.ADD_INVENTORY:
                return {
                    ...state,
                    inventoryList: [...state.inventoryList,action.res] ,
                  };
                  case InventoryActionTypes.COUNT_INVENTORY:
                return {
                    ...state,
                    inventoryTotalPrice: action.res,
                  };
            
                default:
                    return state
    
        }
    }
    


