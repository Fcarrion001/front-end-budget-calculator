'use strict'

const store = require('./store')

const signUpSuccess = (data) => {
  console.log('you signed up')
}

const failure = (data) => {
  console.log('no go')
}

const signInSuccess = (data) => {
  console.log('you signed in')
  store.user = data.user
}

const changePasswordSuccess = (data) => {
  console.log('password changed')
}

const changePasswordFailure = (data) => {
  console.log('no go')
}

module.exports = {
  signUpSuccess,
  failure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure
}
