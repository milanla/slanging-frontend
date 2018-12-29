// action creators
export const getSlangs = (slang) => {
  return {
    type: 'FETCH_SLANG',
    payload: slang
  }
}

export const userSlangs = (slang) => {
  return {
    type: 'USER_SLANGS',
    payload: slang
  }
}

// thunk creators
export const fetchSlangs = (dispatch, searchTerm) => {
  fetch(`http://localhost:3000/slang/${searchTerm}`)
  .then(res => res.json())
  .then(data => dispatch(getSlangs(data)))
}

export const fetchUserSlangs = (dispatch, username) => {
  let url = `http://localhost:3000/${username}/slangs`
  let token = localStorage.getItem('token')

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json',
      'Authorization': token
    }})
    .then(res => res.json())
    .then(data => dispatch(userSlangs(data)))
}
