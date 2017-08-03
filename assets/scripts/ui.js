'use strict'
// require handlebars file
const showCashflowsTemplate = require('./templates/cashflow-listing.hbs')
const store = require('./store')
const inputValue = (target) => $(target).val()
// function to target the needed values and push them to the empty array
const valuesToArray = function (object, array) {
  for (let i = 0; i < object.length; i++) {
    array.push(object[i].value)
  }
}

const signUpSuccess = (data) => {
  store.user = data.user
}

const signUpFailure = () => {
  // on error check to see if the password value and password confirmation value match
  if (inputValue('.signUp-email') === '' || inputValue('.signUp-pw') === '' || inputValue('.signUp-pw-conf') === '') {
    $('.signUp-error').text('Please fill in all fields prior to submission')
  } else if ($('.signUp-pw').val() !== $('.signUp-pw-conf').val()) {
  // if they do not match tell the user what went wrong
    $('.signUp-error').text('Sorry, the passwords you entered do not match. Please try again')
  } else {
    // if they do match the email must be taken
    // tell the user the email is taken already
    $('.signUp-error').text('Sorry, that user already exist')
  }
  // clear the input fields so that the user can start fresh
  $('.clear-input').val('')
  // clear sign-in error message so that only the most recent error is displayed
  $('.signIn-error').text('')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.not-signed-in').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  // make sure only the most recent error is being displayed
  $('.signUp-failure').text('')
}

const signInFailure = () => {
  $('.signIn-error').text('Whoops, user does not exist or password is incorrect')
  $('.clear-input').val('')
  $('.signUp-error').text('')
}
const changePasswordSuccess = (data) => {
  $('.ch-pw').val('')
  // get rid of error message if one exists
  $('.ch-pw-error').text('')
}

const changePasswordFailure = (data) => {
  $('.ch-pw-error').text('Incorrect password or old and new passwords match')
  // clear input fields for re-entry
  $('.ch-pw').val('')
}

const signOutSuccess = () => {
  $('#net-cashflow').text('')
  $('#net-cashflow').hide('')
  $('.content').text('')
  $('.net-result').hide('')
  $('.not-signed-in').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.signUp-error').text('')
  $('.signIn-error').text('')
  $('.clear-input').val('')
}
// ui for calc-events

// post success and failure

const addCashflowSuccess = (data) => {
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
    $('.content').hide
  }
  // This function appends data generated in handlebars into the html
  const showCahflowsHTML = showCashflowsTemplate({ cashflows: data.cashflows })
  $('.content').append(showCahflowsHTML)
  store.cashflow = data.cashflow
}

const indexCashflowFailure = (error) => {
  return error
}

const updateCashflowSuccess = (data) => {
  store.cashflow = data.cashflow
}

const updateCashflowFailure = (error) => {
  return (error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
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
