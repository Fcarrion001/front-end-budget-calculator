'use strict'

const store = require('./store')

const config = require('./config')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
// ajax request POST to cashflows
const addCashflow = function (data) {
  console.log('this is data ' + data)
  return $.ajax({
    url: config.apiOrigin + '/cashflows',
    method: 'POST',
    // require user to be signed-in before creating new cashflow
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// ajax request DELETE to cashflows
const deleteCashflow = function () {
  console.log('currently targeting ' + store.cashflow.id)
  return $.ajax({
    url: config.apiOrigin + '/cashflows/' + store.cashflow.id,
    method: 'DELETE',
    // require user to be signed-in before creating new cashflow
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// ajax request GET to cashflows
const indexCashflow = function (data) {
  console.log('this is data' + data)
  console.log('this is this ' + this)
  return $.ajax({
    url: config.apiOrigin + '/cashflows',
    method: 'GET',
    // require user to be signed-in before creating new cashflow
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signIn,
  signUp,
  signOut,
  changePassword,
  addCashflow,
  deleteCashflow,
  indexCashflow
}
