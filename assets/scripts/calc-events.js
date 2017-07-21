const store = require('./store')
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const addHandlers = () => {
  $('#add-cashflow').on('submit', onAddCashflow)
  $('#delete-cashflow').on('submit', onDeleteCashflow)
  $('#index-cashflow').on('submit', onIndexCashflow)
  $('#update-cashflow').on('submit', onUpdateCashflow)
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
  // on failure
  .catch(ui.deleteCashflowFailure)
}

const onIndexCashflow = function (event) {
  event.preventDefault()
  // ajax request
  api.indexCashflow()
  // on success
  .then(ui.indexCashflowSuccess)
  // on failure
  .catch(ui.indexCashflowFailure)
}

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
