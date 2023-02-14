const initialState = {
  drinks: [],
  detail: {},
};
const rootReducer = (state: any = initialState, action: any): object => {
  switch (action.type) {
    case "SETDRINKS":
      return {
        ...state,
        drinks: action.payload.drinks,
      };

    case "DETAIL":
      return {
        ...state,
        detail: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
