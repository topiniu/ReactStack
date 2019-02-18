export interface TODO_INTER {
  allIds: any[],
  byIds: Item
}
interface Item{
  [key: number]:{
    content: string,
    completed: boolean
  }
}