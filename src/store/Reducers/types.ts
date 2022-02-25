export type InventoryItem = {
  name:string,
  value:string,
  base64String:string,
  description?:string,
}

export  type InventoryReducerType = {
 inventoryList:Array<InventoryItem>,
 inventoryTotalPrice:number
}