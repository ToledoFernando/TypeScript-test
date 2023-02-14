type MyAction = {
  type: string;
  payload: any;
};

export const setDrinks = (data: object): any => {
  console.log(data);
  return (dispatch: any): MyAction => {
    return dispatch({
      type: "SETDRINKS",
      payload: data,
    });
  };
};

export const viewDetail = (data: object): any => {
  return (dispatch: any): MyAction => {
    return dispatch({
      type: "DETAIL",
      payload: data,
    });
  };
};
