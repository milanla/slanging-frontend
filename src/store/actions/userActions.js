export const setUser = (user) => {
  return {
    type: 'SET_USER',
    payload: user.user
  }
}

export const clearUser = () => {
  return {
    type: 'CLEAR_USER',
    payload: 'LOL'
  }
}

export const createNewAccount = (user) => {
  return {
    type: 'CREATE_NEW_ACCOUNT',
    payload: user.user
  }
}
