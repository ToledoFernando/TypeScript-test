export const SETDRINKS = "SETDRINKS";
export const GETDRINKS = "GETDRINKS";

export const setDrinks = (data: object): object => {
  return (dispatch: any) => {
    return dispatch({
      type: SETDRINKS,
      payload: data,
    });
  };
};

export const getDrinks = (): object => {
  return (dispatch: any) => {
    return dispatch({
      type: GETDRINKS,
    });
  };
};
