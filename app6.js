/**
 * // функция склонения падежа валюты рубль в зависимости от последней цифры введеной пользователем суммы депозита
 * @amountDeposit {number} //переменная, которая хранит запрашиваемую  у пользователя  сумму для взноса
 * @strAmountDeposit {string}   //узнаем количество символов, которое ввёл пользователь и записываем в переменную strAmountDeposit
 * @lastChartAmountDeposit {string} //узнаем какой символ последний в перменной amountDeposit, которую ввел пользователь и записываем его в переменную lastChartAmountDeposit
   @currencyName {string}  //объявляем перемнную, которая будет принимать значение (либо рубль / рублей / рубля) в зависимости от того какую сумму ввел пользователь
 * @returns Выводим  alert(`Ваша сумма в ${amountDeposit} ${currencyName} успешно зачислена.`);  
 */

function declinationCurrency() {
  let amountDeposit = prompt("Введите сумму, которую вы хотите внести");

  // Выполняем проверку, что пользователь ввел число, а не что-то другое если пользователь ввел не число запускаем функцию еще раз 
  if (isNaN(amountDeposit)) {
    alert("Вы ввели не число введите сумму еще раз");
    declinationCurrency();
  }

  let strAmountDeposit = amountDeposit.length;
  let lastChartAmountDeposit = amountDeposit.charAt(strAmountDeposit - 1);
  let currencyName = String;
  // запускаем switch который будет выводить рубль в нужном склонении падежа в зависимости от суммы введенной пользователем 
  switch (lastChartAmountDeposit) {
    case "1":
      currencyName = "рубль";
      return alert(`Ваша сумма в ${amountDeposit} ${currencyName} успешно зачислена.`);
    case "2":
      currencyName = "рубля";
      return alert(`Ваша сумма в ${amountDeposit} ${currencyName} успешно зачислена.`);
    case "3":
      currencyName = "рубля";
      return alert(`Ваша сумма в ${amountDeposit} ${currencyName} успешно зачислена.`);
    case "4":
      currencyName = "рубля";
      return alert(`Ваша сумма в ${amountDeposit} ${currencyName} успешно зачислена.`);
    case "5":
      currencyName = "рублей";
      return alert(`Ваша сумма в ${amountDeposit} ${currencyName} успешно зачислена.`);
    case "6":
      currencyName = "рублей";
      return alert(`Ваша сумма в ${amountDeposit} ${currencyName} успешно зачислена.`);
    case "7":
      currencyName = "рублей";
      return alert(`Ваша сумма в ${amountDeposit} ${currencyName} успешно зачислена.`);
    case "8":
      currencyName = "рублей";
      return alert(`Ваша сумма в ${amountDeposit} ${currencyName} успешно зачислена.`);
    case "9":
      currencyName = "рублей";
      return alert(`Ваша сумма в ${amountDeposit} ${currencyName} успешно зачислена.`);
    case "0":
      currencyName = "рублей";
      return alert(`Ваша сумма в ${amountDeposit} ${currencyName} успешно зачислена.`);
  }

}

// Вызываем функцию declinationCurrency
declinationCurrency();




