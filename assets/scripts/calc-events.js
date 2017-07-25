const store = require('./store')
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const addHandlers = () => {
  $('#add-cashflow').on('submit', onAddCashflow)
  // function now targets delete button generated through handlebars
  $('.content').on('submit', '.delete-cashflow', onDeleteCashflow)
  // $('#index-cashflow').on('submit', onIndexCashflow)
  $('.content').on('submit', '.update-cashflow', onUpdateCashflow)
}

// function to be run when a submission is made with id #calculator
// This will attempt to post a new row to cashflows
const onAddCashflow = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // ajax request
  api.addCashflow(data)
  // on success
  .then(ui.addCashflowSuccess)
  .then(api.indexCashflow)
  .then(ui.indexCashflowSuccess)
  // on failure
  .catch(ui.addCashflowFailure)
}
const onDeleteCashflow = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // ajax request
  api.deleteCashflow(data)
  // on success
  .then(ui.deleteCashflowSuccess)
  // make ajax request GET request for users index
  .then(api.indexCashflow)
  // update html to reflect change to user automatically
  .then(ui.indexCashflowSuccess)
  // on failure
  .catch(ui.deleteCashflowFailure)
}

// const onIndexCashflow = function (event) {
//   event.preventDefault()
//   // ajax request
//   api.indexCashflow()
//   // on success
//   .then(ui.indexCashflowSuccess)
//   // on failure
//   .catch(ui.indexCashflowFailure)
// }

const onUpdateCashflow = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // ajax request
  api.updateCashflow(data)
  // on success
  .then(ui.updateCashflowSuccess)
  // on failure
  .catch(ui.updateCashflowFailure)
}
module.exports = {
  addHandlers
}
