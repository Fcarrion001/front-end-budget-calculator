const store = require('./store')
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const addHandlers = () => {
  $('#calculator').on('submit', onAddCashflow)
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

module.exports = {
  addHandlers
}
