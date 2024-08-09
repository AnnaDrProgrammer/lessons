// СОЗДАЕМ КАЛЬКУЛЯТОР
// в HTML:
// <p id="result" class="mb-0">49></p>
// теперь в JS:
// console.log(resultElement)

// const resultElement = document.getElementById("result")
// const input1= document.getElementById(input1)
// const input2 = document.getElementById(input2)

//теперь, чтобы узнать какое значение в этих 
// инпутах мы используем value:

// console.log(input1.value)
// console.log(input2.value)

// супер, мы получаем тогда результат
// но сделаем мы это по-другому, зададим константу!!!

// const sum = input1.value + input2.value
// resultElement.textContent = sum

// но код будет это воспринимать как строку, а не как число,
// поэтому нужно удостовериться, что в результате мы получим число
// ПРИВЕДЕНИЕ ТИПОВ!!!!= СПЕЦИАЛЬНОЕ "typeof"
// КОНКАТИНАЦИЯ - это сложение СТРОК
// короче, ща строку будем приводить к ЧИСЛУ

// const sum = Number(input1.value) + Number(input2.value)
// resultElement.textContent = sum

// console.log(typeof sum)
// Мы хотим, чтобы получался результат при наждимании на кнопку "Вычислить"
// Ищем эту кнопочку по айдишнику в HTML 
// <button id="submit"></button>

const submitBtn = document.getElementById('submit')

// через точку (.) добавляем обработчик события

// submitBtn.onclick = function (){
//  const sum = Number(input1.value) + Number(input2.value);
//  resultElement.textContent = sum;
// }

// создаем две кннопочки "плюс" и "минус"
// const plusBtn = document.getElementById('plus')
// const minusBtn = document.getElementById("minus")
// и получаем по итогу: (+ предыдущие записи):
// и еще мы добавили переменную action
//Обращаемся к УСЛОВНЫМ ОПЕРАТОРАМ через "if"

const resultElement = document.getElementById("result")
const input1= document.getElementById(input1)
const input2 = document.getElementById(input2)
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById("minus")
let action = '+'

plusBtn.onclick = function (){
action = '+'
}

minusBtn.onclick = function () {
action = "-";
};

// submitBtn.onclick = function () {
//   if (action == '+')
//   const sum = Number(input1.value) + Number(input2.value)
//   resultElement.textContent = sum
// };

// submitBtn.onclick = function () {
//   if (action == '-')
//   const sum = Number(input1.value) - Number(input2.value)
//   resultElement.textContent = sum
};

// спойлер: получилась хуйня, поэтому надо ОПТИМИЗИРОВАТЬ
// смотри вычитание -ELSE

// submitBtn.onclick = function () {
//   if (action == '+')
//   const sum = Number(input1.value) + Number(input2.value)
//   resultElement.textContent = sum
// };

// submitBtn.onclick = function () {
//   else if (action == '-')
//   const sum = Number(input1.value) - Number(input2.value)
//   resultElement.textContent = sum

  //этих ELSE IF можешь до усрачки много раз повторять
// теперь еще разок ОПТИМИЗИРУЕМ

function computeNumbersWithAction (inp1, inp2, actionSymbol){
const num1 = Number(inp1.value)
const num2 = Number(inp2.value)

if (actionSymbol == '+'){
 return num1 + num2
}

if (actionSymbol == '-'){
 return num1 - num2
}

submitBtn.onclick = function () {
const result = computeNumbersWithAction(input1, input2, action)
printResult(result) 

// ТЕРНАРНЫЙ ОПЕРАТОР
// если экшинсимбол равен плюсику?, то делаем сумму, ИНАЧЕ - разницу
// return actionSymbol == '+' ? num1 + num2 : num1 - num2
// так это записывается


