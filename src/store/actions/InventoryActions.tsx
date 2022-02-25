import { Dispatch } from "redux"
import * as InventoryActionTypes from '../actiontypes/InventoryActionTypes';
import { InventoryItem } from "../Reducers/types";
import { InventoryDispatchType } from "./types";



export const AddInventoryAction = (res:InventoryItem):any =>
{
    return (dispatch:Dispatch):any =>
    {
        dispatch({type:InventoryActionTypes.ADD_INVENTORY, res})
    }
}

export const setTotalPriceAction = (res:number) =>
{
    return (dispatch:Dispatch<InventoryDispatchType>) =>
    {
        dispatch({type:InventoryActionTypes.COUNT_INVENTORY, res})
    }
}

