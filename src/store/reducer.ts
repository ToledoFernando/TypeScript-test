import { SETDRINKS, GETDRINKS } from "./action";

const initialState = {
  drinks: [],
};
const rootReducer = (state: any = initialState, action: any): object => {
  switch (action.type) {
    case SETDRINKS:
      return {
        ...state,
        drinks: [...state.drinks, action.payload],
      };
    case GETDRINKS:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
