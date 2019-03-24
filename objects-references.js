let myAccount = {
  name: 'Ange',
  expenses: 0,
  income: 0
}

const addExpenses = (account, amount) => {
  account.expenses = account.expenses + amount
  console.log(account)
}

const removeExpenses = (account, amount) => {
  account.expenses = account.expenses - amount
  console.log(account)
}


const resetAccount = (account) => {
  account.income = 0
  account.expenses = 0
}
const otherAccount = myAccount
otherAccount.income = 2000

addExpenses(myAccount, 50)
resetAccount(myAccount)
addExpenses(myAccount, 40)
removeExpenses(myAccount, 30)

