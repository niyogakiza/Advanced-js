const account = {
  name: 'Aimable',
  expenses: [],
  incomes: [],
  balance: 0,
  addExpenses: function(description, amount){
    this.expenses.push({
      description,
      amount
    })
  },
  addIncome: function(description, amount) {
    this.incomes.push({
      description,
      amount
    })
  },
  getAccountSummary: function () {
    let totalExpenses = 0
    let totalIncome = 0

    this.expenses.forEach((expense) => {
      totalExpenses = totalExpenses + expense.amount
    })

    this.incomes.forEach(income => {
      totalIncome = totalIncome + income.amount
    })

    let accountBalance = totalIncome - totalExpenses

    return `${this.name} has income of $ ${10000} and expenses of $${totalExpenses} each month so he remains with $ ${accountBalance}`
  }
}

console.log(account.addExpenses('Rent', 987))
console.log(account.addExpenses('Coffee', 207))
console.log(account.addIncome('Coffee', 10007))


console.log(account.getAccountSummary())

