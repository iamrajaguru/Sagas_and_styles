
const initialState = {
  Message: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      console.log("SETUSER", action.value);
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
