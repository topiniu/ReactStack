import Types from './actionTypes'

let idFlag = 0;

export const addTodo = (content: string) => ({
  type: Types.ADD_TODO,
  payload: {
    id: ++ idFlag,
    content
  }
})

export const toggleTodo = (id:number) => ({
  type: Types.TOGGLE_TODO,
  payload: {id}
})