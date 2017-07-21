const store = require('./store')
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const addHandlers = () => {
  $('#calculator').on('submit', onAddCashflow)
}

const onAddCashflow = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.addCashflow(data)
}

module.exports = {
  addHandlers
}
