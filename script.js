let money, time;

money = prompt("Ваш бюджет на месяц?", "100000");
time = prompt("Введите дату в формате YYYY-MM-DD", "2019-05-19");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        // prompt("Обязательная статья расходов", "") : prompt("Во сколько обойдется?", "")
    },
    optionalExpenses : null,
    income: null,
    savings: false
}

appData.expenses[prompt("Обязательная статья расходов", "shopping")] = prompt("Во сколько обойдется?", "50000");

alert(appData.budget / 30);

console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.expenses);
console.log(appData.optionalExpenses);
console.log(appData.income);
console.log(appData.savings)

