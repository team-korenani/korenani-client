const defaultState = {
  imgData: "",
  results: []
};

const reducer = (state = defaultState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case "SET_IMG_DATA":
      newState.imgData = action.data;
      return newState;
    case "SET_RESULT_DATA":
      newState.results = action.data;
      return newState;
    default:
      return state;
  }
};

export default reducer;
