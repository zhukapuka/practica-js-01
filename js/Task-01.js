// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().
const number = Number(prompt("Enter number"));
//ariant1
if (number === 10) {
  alert(`Вірно`);
} else {
  alert(`Невірно`);
}
console.log(number);
//variant2
number === 10 ? alert(`Вірно`) : alert(`Невірно`);
//variant3
alert(number === 10 ? `Вірно` : `Невірно`);
