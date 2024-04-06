const initialValue = {
    count: 0,
  };
  
  const ReduxReducer = (state = initialValue, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count > 0 ? state.count - 1 : 0,
        };
      default:
        return state;
    }
  };
  
  export {initialValue,ReduxReducer};
  