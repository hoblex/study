let money, time;

money = +prompt("Ваш бюджет на месяц?", '');
time = prompt("Введите дату в формате YYYY-MM-DD", "2019-05-19");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses : {},
    timeData: time,
    income: null,
    savings: false
};

for (let i = 0; i < 2; i++){
    let a = prompt("Обязательная статья расходов", "shopping");
    let b = +prompt("Во сколько обойдется?", '');
    if((typeof(a)) === "string" && (typeof(a) !== null) && (typeof(b) !== null) && a !== '' && b !== '' && a.length < 50) {
        console.log("done")
        appData.expenses[a] = b;
    } else {
        continue;
    }
};

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData. moneyPerDay < 100){
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка")
}
