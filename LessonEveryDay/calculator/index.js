const inputNumber1El = document.querySelector("#number1");
const inputNumber2El = document.querySelector("#number2");

const operationPlusEl = document.querySelector("#plus");
const operationMinusEl = document.querySelector("#minus");
const cleanerButtonEl = document.querySelector("#cleaner");

const resultEl = document.querySelector("#result");

// TODO:
// 1) Дописать остальные операции: умножение, разность, деление
// 2) На клик кнопка очистки должна удалять введеные значения и результат

operationPlusEl.addEventListener("click", (_) => {
  const num1 = Number(inputNumber1El.value);
  const num2 = Number(inputNumber2El.value);
  const result = calc("+", num1, num2);

  resultEl.innerHTML = `Результат: ${result}`;
});

cleanerButtonEl.addEventListener("click", (_) => {
  
});
