//JS выполняет действия на HTML
//что происходит ниже: задаем интервал и каждые 4 секунды (4000) нужно сделать:
//эй, Документ, найди элемент по айди
// а ты, Виндоу, отобрази это на окне


Hello <input id= 'message' />
<script>
  setInterval(function() => {
    var messageInput = document.getElementById('message');
    window.alert(messgeInput.value);
    }, 4000);
</sacript>

//УРОК1
<script>
  window.alert('Hello');
  window.alert('Hi!!!');
</script>

//ПЕРЕМЕННЫЕ и ОБЪЕКТЫ
//к одному объкту можем присвоить несколько перемнных
//КАК ЗАДАЕТСЯ ПЕРЕМЕННАЯ
// переменная= var(команда)+ имя переменной(name);
// ПЛЮС name = '';(это присвоение)
var peremennaya1;
peremennaya1 = 'number1';

//

<script>
var peremennaya1;
peremennaya1 = 'number1';
  window.alert(peremennaya1);
  window.alert(peremennaya1);
</script>

//сделаем переводчик
<script>
  var wordCAt;
  wordCAt = Cat;

  var translateWordCat;
  translateWordCat = 'Кот';

  window.alert(wordCAt);
  window.alert(translateWordCat);
</script>

// getElementById

//в HTML у нас следующее:
<input value = 'hello' class = 'hello-message input' id='hello-messsage'</input>

//пишем код
<script>

//задаем переменные
var helloMessageElement;
var helloMessageId;

//задаем значение второй переменной
helloMessageId = 'hello-message';

//вызывем по айдишнику (смотрит на 61, потом 59, потом 52- у id='hello-messsage')
document.getElementById(helloMessageId);


//а еще можно так сделать:
window.alert(helloMessageElement.value);
window.alert(helloMessageElement.id);
//value и id он нашел по айдишнику в HTML
//консоль выдаст: "hello" и "hello-message"
</script>