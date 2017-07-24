'use strict'
// require handlebars file
const showCashflowsTemplate = require('./templates/cashflow-listing.hbs')
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
  console.log(data.cashflow.id)
  // I will require handlebars here or within the index function that I will
  // call here
  store.cashflow = data.cashflow
}

const addCashflowFailure = (error) => {
  console.log(error)
}

const deleteCashflowSuccess = () => {
  console.log('deleteCashflow was successful ')
}

const deleteCashflowFailure = (error) => {
  console.log(error)
}

const indexCashflowSuccess = (data) => {
  console.log('indexCashflow was successful ')
  // delete everything in the div class content so that only one copy of the
  // budget item list appears at any given time.
  $.each($('.content'), function (index, element) {
    $(element).text('')
  })
  // This function appends data generated in handlebars into html
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
  addCashflowSuccess,
  addCashflowFailure,
  deleteCashflowSuccess,
  deleteCashflowFailure,
  indexCashflowSuccess,
  indexCashflowFailure,
  updateCashflowSuccess,
  updateCashflowFailure
}
