'use strict'
// require handlebars file
const showCashflowsTemplate = require('./templates/cashflow-listing.hbs')
const store = require('./store')

// logic for budget calculations to be called upon successful index request.

// function to target the needed values and push them to the empty array
const valuesToArray = function (object, array) {
  for (let i = 0; i < object.length; i++) {
    array.push(object[i].value)
  }
}

const signUpSuccess = (data) => {
  store.user = data.user
}

const failure = (error) => {
  return error
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.not-signed-in').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
}

const changePasswordSuccess = (data) => {
  $('.ch-pw').val('')
}

const changePasswordFailure = (data) => {
}

const signOutSuccess = () => {
  $('#net-cashflow').text('')
  $('#net-cashflow').hide('')
  $('.net-result').hide('')
  $('.not-signed-in').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}
// ui for calc-events

// post success and failure

const addCashflowSuccess = (data) => {
  console.log(data.cashflow)
  store.cashflow = data.cashflow
}

const addCashflowFailure = (error) => {
  return error
}

const deleteCashflowSuccess = (data) => {

}

const deleteCashflowFailure = (error) => {
  return error
}

const indexCashflowSuccess = (data) => {
  // empty array to house values to be added together
  const cashflowValueArray = []
  // delete everything in the div class content so that only one copy of the
  // budget item list appears at any given time.
  $('.content').text('')
  // gave all input fields that I want cleared the clear-input class then targeted
  // it here to be cleared everytime indexCashflowSuccess is called
  $('.clear-input').val('')
  // clear outdated calculation so that it remains accurate
  $('#net-cashflow').text('')
  // invoke function to plug values into the array
  valuesToArray(data.cashflows, cashflowValueArray)
  // use reduce method to add all the values together and return the net sum.
  const netCashflow = cashflowValueArray.reduce(function (sum, value) {
    return sum + value
  }, 0)
  // show result to the user if there is atleast one cashflow.
  if (cashflowValueArray.length > 0) {
    $('.net-result').show()
    $('#net-cashflow').show()
    $('#net-cashflow').text(netCashflow)
  } else {
    // hide to avoid a bug that occurs when user deletes the only cashflow
    $('.net-result').hide()
    $('#net-cashflow').hide()
  }
  // This function appends data generated in handlebars into the html
  const showCahflowsHTML = showCashflowsTemplate({ cashflows: data.cashflows })
  $('.content').append(showCahflowsHTML)
  store.cashflow = data.cashflow
}

const indexCashflowFailure = (error) => {
  console.log(error)
  console.log('index didnt work')
}

const updateCashflowSuccess = (data) => {
  console.log('updateCashflow was successful')
  store.cashflow = data.cashflow
}

const updateCashflowFailure = (error) => {
  console.log(error)
}

module.exports = {
  signUpSuccess,
  failure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  addCashflowSuccess,
  addCashflowFailure,
  deleteCashflowSuccess,
  deleteCashflowFailure,
  indexCashflowSuccess,
  indexCashflowFailure,
  updateCashflowSuccess,
  updateCashflowFailure
}
