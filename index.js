'use strict'

function calculateBalance (currentBalance, total, amount) {
  currentBalance += amount
  if (currentBalance <= total) {
    return {
      newBalance : currentBalance,
      status : (currentBalance === total) ? 'Pagado':'Pendiente de pago'
    }
  } else {
    return {
      newBalance : currentBalance - amount,
      status : 'Error en el calculo el importe esta exediendo el saldo faltante.'
    }
  }
}

exports = {
  calculateBalance
}
