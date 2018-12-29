const initialState = {
  searchRes: [],
  slangs: []
}

const slangReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SLANG': {
      return { ...state, searchRes: action.payload}
    }
    case 'CLEAR_SEARCH': {
      return {...state, searchRes: []}
    }
    case 'USER_SLANGS': {
      return {...state, slangs: action.payload}
    }

    default:
      return state;
  }
}

export default slangReducer;
