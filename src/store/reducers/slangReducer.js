const initialState = {
  searchRes: [],
  slangs: []
}

const slangReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SLANG': {
      return { ...state, searchRes: action.payload}
    }
    case 'CREATE_SLANG': {
      // debugger
      return { ...state, slangs: [...state.slangs, action.payload] }
    }
    case 'CLEAR_SEARCH': {
      return {...state, searchRes: []}
    }
    case 'USER_SLANGS': {
      return {...state, slangs: action.payload}
    }
    case 'DELETE_SLANG': {
      // debugger
      const filteredArr = state.slangs.filter(slang => {
        return slang.id !== action.payload.id
      })
      return {...state, slangs: filteredArr }
    }

    default:
      return state;
  }
}

export default slangReducer;
