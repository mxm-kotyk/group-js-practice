// 1. Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
//Видаліть перший елемент масива та виведіть його в консоль
// Додайте 'Реп' та 'Реггі' на початок списку.
// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');

// // styles[1] = 'Класика';

//  let idex = styles.indexOf('Блюз');
// // styles[idex] = 'Класика';

// styles.splice(idex, 1, 'Класика');
// console.log(styles.shift());
// styles.unshift('Реп', 'Реггі');
// console.log(styles);

// 2. Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// function logItems(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(["Джаз", "Блюз", "Рок-н-ролл", "Реп", "Реггі"]);


//3. Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//ключ:значення використовуя Object.keys() та for...of

const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
  console.log(`${key}: ${user[key]}`)
}