const initialState = {
    FILES: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "FilesData": 
        return {
          ...state,
          FILES: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  