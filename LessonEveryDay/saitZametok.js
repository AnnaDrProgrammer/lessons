// СОЗДАЕМ САЙТ ЗАМЕТОК
//создаем заголовок заметок, конпуку "создать" и список заметок

const inputElement = document.getElemenById("title");
const createBtn = document.getElemenById("create");
const listElement = document.getElemenById("list");

// далее создаем с документа НТМЛ подключаем лишки, с классами, редактирующими поле "список заметок"

// createBtn.onclick = function (){
//   listElement.innerHTML = `
//   <<li ла ла ла ...бла бла бла
//   class ="list - group и так далее, тут будет верстка из НТМЛя"
//   <span>${inputElement.value}</span>`
// }

// обрати внимание на INNERHTML!!! и знаки `` и ${}
// они позволяют верстку добавлять в JS и подключать JS в огрызках верстки!!!

// инсертаджаснтэлемент - эта функция с двумя параметрами
// первый параметр 'beforeend' - указываем куда положить этот HTML
//вторым параметром (HTML) мы передаем строчку

createBTN.onclick = function () {
  listElement.insertAdjacentHTML(
    "beforeend",
    `<<li ла ла ла ...бла бла бла
  class ="list - group и так далее, тут будет верстка из НТМЛя"
  <span>${inputElement.value}</span>`
  );
};

//нужно сделать так, чтобы при введении пустой строки, заметка не добавлялась
createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
};
//те мы после return возвращаем undefind если ничего не ввели в поле заметок, тк указали ===0 (т.е. ничего не ввели)

//как только мы ввели элемент, надо сделать первый инпут пустым, чтобы моржно было написать новую заметку
// поэтому делаем следующее
createBTN.onclick = function () {
  listElement.insertAdjacentHTML(
    "beforeend",
    `<<li ла ла ла ...бла бла бла
  class ="list - group и так далее, тут будет верстка из НТМЛя"
  <span>${inputElement.value}</span>`
  );
  inputElement.value = "";
};
// inputElement.value = "" возвращаем пустую строку и , таким образом, очищаем поле ввода

//Задачи - вывести список заметок, который у нас уже ест на странице
const notes = ["покормить кота", "треня", "кодинг"];
function render() {
  listElement.insertAdjacentHTML(
    "beforeend",
    `<<li ла ла ла ...бла бла бла
  class ="list - group и так далее, тут будет верстка из НТМЛя"
  <span>${notes[1]}</span>`
  );
  inputElement.value = "";
}


//ПРОДОЛЖЕНИЕ 08.08.24
//изначально у нас есть массив:
// const notes = ['покормить кота', 'треня', 'кодинг']
//каждый ЭЛЕМЕНТ массива мы можем записать как ОБЪЕКТ(в количестве нескольких)
const notes = [
  {
    title: 'покормить кота',
    completed: false,
  },
  {
    title: 'треня',
    completed: false,
  },
  {
    title: "кодинг",
    completed: false,
  },
];

function render(){
for (let i=0; i<notes.length; i++){
  listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
}
for (let note of notes) {
  listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
}
}
render()