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
// ui for calc-events

// post success and failure

const addCashflowSuccess = (data) => {
  console.log('addCashflow was successful ')
  console.log(data)
}

const addCashflowFailure = (error) => {
  console.log(error)
}

module.exports = {
  signUpSuccess,
  failure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  addCashflowSuccess,
  addCashflowFailure
}
