// action creators
export const getSlangs = (slang) => ({ type: 'FETCH_SLANG', payload: slang })

export const newSlang = (slang) => ({ type: 'CREATE_SLANG', payload: slang })

export const userSlangs = (slang) => ({ type: 'USER_SLANGS', payload: slang })

export const deleteSlang = (slang) => ({ type: 'DELETE_SLANG', payload: slang})

// thunk creators
export const fetchSlangs = (dispatch, searchTerm) => {
  fetch(`http://localhost:3000/slang/${searchTerm}`)
  .then(res => res.json())
  .then(data => dispatch(getSlangs(data)))
}

export const fetchUserSlangs = (dispatch, username) => {
  let url = `http://localhost:3000/${username}/slangs`

  let options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
  }

  fetch(url, options)
    .then(res => res.json())
    .then(data => dispatch(userSlangs(data)))
}

export const handleSlangSubmit = (dispatch, slang, user) => {
  let options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token') },
        body: JSON.stringify({
          user_id: user.id,
          term: slang.term,
          definition: slang.definition,
          example: slang.example
        })
      }
    fetch("http://localhost:3000/slangs", options)
    .then(res => res.json())
    .then(slang => dispatch(newSlang(slang)))
}

export const handleDeleteSlang = (dispatch, slang) => {
  dispatch(deleteSlang(slang))

  let options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
  }
    fetch(`http://localhost:3000/slangs/${slang.id}`, options)
      .then(res => res.json())
      .then(console.log)

}
