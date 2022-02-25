import { COUNT_INVENTORY, ADD_INVENTORY } from './../actiontypes/InventoryActionTypes';
import { InventoryItem } from "../Reducers/types";

export type InventoryDispatchType = {
    type: typeof COUNT_INVENTORY | typeof ADD_INVENTORY,
    res:InventoryItem | number
}