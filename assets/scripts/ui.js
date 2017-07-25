'use strict'
// require handlebars file
const showCashflowsTemplate = require('./templates/cashflow-listing.hbs')
const store = require('./store')

const signUpSuccess = (data) => {
  console.log(data.user)
  store.user = data.user
}

const failure = (error) => {
  console.log(error)
}

const signInSuccess = (data) => {
  console.log(data.user)
  store.user = data.user
}

const changePasswordSuccess = (data) => {
  console.log('password changed')
  $('.ch-pw').val('')
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
  $('cashflow[name]').val('name of cashflow item')
  store.cashflow = data.cashflow
}

const addCashflowFailure = (error) => {
  console.log(error)
}

const deleteCashflowSuccess = (data) => {
  console.log('deleteCashflow was successful ')
}

const deleteCashflowFailure = (error) => {
  console.log(error)
}

const indexCashflowSuccess = (data) => {
  // delete everything in the div class content so that only one copy of the
  // budget item list appears at any given time.
  // make this DRY later turn it into a funtion with target as a parameter
  $('.clear-input').val('')

// logic for budget calculations to be called upon successful index request.
// empty array to house values to be added together
  const cashflowValueArray = []
// function to target the needed values and push them to the empty array
  const valuesToArray = function (object, array) {
    for (let i = 0; i < object.length; i++) {
      array.push(object[i].value)
    }
    console.log(array)
  }
  // invoke function to plug values into the array
  valuesToArray(data.cashflows, cashflowValueArray)
  console.log(cashflowValueArray)
  // use reduce method to add all the values together and return the net sum.
  const netCashflow = cashflowValueArray.reduce(function (sum, value) {
    return sum + value
  }, 0)
  // show result to the user if there is atleast one cashflow.
  if (cashflowValueArray.length > 0) {
    $('.net-result').show(100)
    $('#net-cashflow').text(netCashflow)
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
  addCashflowSuccess,
  addCashflowFailure,
  deleteCashflowSuccess,
  deleteCashflowFailure,
  indexCashflowSuccess,
  indexCashflowFailure,
  updateCashflowSuccess,
  updateCashflowFailure
}
