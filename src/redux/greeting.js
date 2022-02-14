const LOAD_GREETING = "helloRailsFrontEnd/greeting/LOAD_GREETING";

const initialState = [];

const reducer = (state = initialState, action) => {
  const {type} = action;
  switch (type) {
    case LOAD_GREETING:
      return "something";
    default:
      return state;
  }
};

export const loadGreetingAction = (apiState) => ({
  type: LOAD_GREETING,
  payload: apiState,
});

export default reducer;