import {CombinedState, combineReducers, Reducer} from 'redux'
import { store } from '../store';
import { InventoryReducer } from './InventoryReducer';






export const RootReducer:CombinedState<Reducer> = combineReducers({
    inventory:InventoryReducer,
});





export type RootState = ReturnType<typeof RootReducer>
