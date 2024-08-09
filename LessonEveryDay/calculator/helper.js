// TODO:
// 1) Обработать деление на 0

function calc(operation, num1, num2) {
  if (typeof num1 === "string" || typeof num2 === "string") {
    return "Ошибка, необходимо ввести число";
  }

  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    default:
      return "No operation";
  }
}
