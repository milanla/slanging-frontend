import { setUser } from './userActions'

export const loginSubmit = (dispatch, userInfo) => {

  let url = 'http://localhost:3000/api/v1/login'

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify({
      user: userInfo
    })
  })
    .then(res => res.json())
    .then(user => {
      localStorage.setItem('token', user.jwt)
      dispatch(setUser(user))
    })
}

export const getCurrentUser = (dispatch, getState) => {
  let url = 'http://localhost:3000/api/v1/current_user'
  let token = localStorage.getItem('token')

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json',
      'Authorization': token
    }})
    .then(res => res.json())
    .then(user => dispatch(setUser(user)))
}

export const signUpSubmit = (dispatch, userInfo) => {
  let url = 'http://localhost:3000/api/v1/users'

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: userInfo.username,
        password: userInfo.password
      }
    })
  })
    .then(res => res.json())
    .then(user => {
      localStorage.setItem('token', user.jwt)
      dispatch(setUser(user))
    })
}
