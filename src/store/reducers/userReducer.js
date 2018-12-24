const initialState = {
    user: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return { ...state, user: action.payload}
    }
    case 'CREATE_NEW_ACCOUNT': {
      return { ...state, user: action.payload}
    }
    case 'CLEAR_USER': {
      return { ...state, user: null }
    }

    default:
      return state;
  }
}

export default userReducer;
