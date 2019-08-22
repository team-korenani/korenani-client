const defaultState = {
  imgData: "",
  keywords: []
};

const reducer = (state = defaultState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case "SET_IMG_DATA":
      newState.imgData = action.data;
      return newState;
    case "SET_KEYWORDS":
      newState.keywords = action.data;
      return newState;
    default:
      return state;
  }
};

export default reducer;
