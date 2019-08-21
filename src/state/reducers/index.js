const defaultState = {
  imgData: ""
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_IMG_DATA":
      const newState = Object.assign({}, state);
      newState.imgData = action.data;
      return newState;
    default:
      return state;
  }
};

export default reducer;
