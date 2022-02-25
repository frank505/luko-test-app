import React from "react";
import { AnyAction, Dispatch } from "redux"
import * as InventoryActionTypes from '../actiontypes/InventoryActionTypes';
import { InventoryItem } from "../Reducers/types";
import { InventoryDispatchType } from "./types";



export const AddInventoryAction = (res:InventoryItem):React.Dispatch<React.SetStateAction<any>> =>
{

    return (dispatch):Dispatch<InventoryDispatchType>  =>
    {
       return dispatch({type:InventoryActionTypes.ADD_INVENTORY, res})
    }
}

export const setTotalPriceAction = (res:number):React.Dispatch<React.SetStateAction<any>> =>
{
    return (dispatch):Dispatch<InventoryDispatchType> =>
    {
      return  dispatch({type:InventoryActionTypes.COUNT_INVENTORY, res})
    }
}

