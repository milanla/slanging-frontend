// action creators
export const getSlangs = (slang) => {
  return {
    type: 'FETCH_SLANG',
    payload: slang
  }
}

// thunk creators
export const fetchSlangs = (dispatch, searchTerm) => {
  fetch(`http://localhost:3000/slang/${searchTerm}`)
  .then(res => res.json())
  .then(data => dispatch(getSlangs(data)))
}
