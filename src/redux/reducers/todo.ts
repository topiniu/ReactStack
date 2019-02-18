import Types from "../actionTypes";
import { TODO_INTER } from "../../interface/storeInter/todo";
import { STOREACTIONINTER } from "../../interface/globalInterface";
const initialState: TODO_INTER = {
  allIds: [],
  byIds: {}
};

export default (state = initialState, action: STOREACTIONINTER) => {
  switch (action.type) {
    case Types.ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: { ...content, completed: false }
        }
      };
    }
    case Types.TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
  }
};
