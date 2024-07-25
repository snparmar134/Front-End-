const initialState = {
    activeIndex: null
  };
  
  const accordionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_ACCORDION':
        return {
          ...state,
          activeIndex: state.activeIndex === action.index ? null : action.index
        };
      default:
        return state;
    }
  };
  
  export default accordionReducer;
  