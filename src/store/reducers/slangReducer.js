const initialState = {
  searchRes: [],
  slangs: [],
  likedSlangs: []
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
      const filteredArr = state.slangs.filter(slang => {
        return slang.id !== action.payload.id
      })
      return {...state, slangs: filteredArr }
    }
    case 'LIKE_SLANG': {
      return {...state, likedSlangs: [...state.likedSlangs, action.payload]}
    }
    case 'FETCH_LIKE': {
      return { ...state, likedSlangs: action.payload }
    }
    case 'UNLIKE_SLANG': {
      const filteredArr = state.likedSlangs.filter(slang => {
        return slang.id !== action.payload.id
      })
      return { ...state, likedSlangs: filteredArr }
    }

    default:
      return state;
  }
}

export default slangReducer;
