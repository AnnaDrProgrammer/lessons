// ПРИОРИТЕТЫ
// === этот знак (три равно) проверяет как на ЗНАЧЕНИЕ, так и на ТИП данных


//МАССИВЫ И ОБЪЕКТЫ
// лучше массив писать через const, а не через let
// const array = [1, 2, 3, 4]
// помним, что индексы начинаются с нуля!!!
// массимвы могу содержать - нулл, число, строки и тд.
// const array = new Array(1, 2, 3, 4) - можно еще так писать
// console.log(array.lenght) так выводим в консоль весь массив
// console.log(array[3])     так можно искать элемент по индексу
// console.log(array[array.length - 1])   так находим последний элемент массива


// ТЕОРИЯ ПО ОБЪЕКТАМ
// объекты - это группа свойств, которые относятся к константе
// в качестве свойст могут быть - строки, числа, буллевые выражения, ФУНКЦИИ и т.д
//обрати внимание, как записываем ФУНКЦИЮ в этом случае, точнее, как вызываем ее
//можнот вызывать множестыво свойств через + и ,
const person = {
firstName: 'Anna',
lastName: 'Maximova',
birthYear: '2000',
hasBoyfriend: 'true',
getFullName: function(){
  console.log(person.firstName + '' + person.lastName)
  //можем также обращаться через КЛЮЧ, введя константу key
  const key = "hasBoyfriend"
  console.log(person[key])
}
}
console.log()


// 3КАК РАБОТАЮТ ЦИКЛЫ
function render(){
  for (let i = 0; i< notes.lenght; i++){
    
  }
}