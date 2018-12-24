const initialState = {
  searchRes: []
}

const slangReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SLANG': {
      return { ...state, searchRes: action.payload}
    }
    case 'CLEAR_SEARCH': {
      return {...state, searchRes: []}
    }
    
    default:
      return state;
  }
}

export default slangReducer;
