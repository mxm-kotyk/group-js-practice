//1. Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const question = prompt("Яка офіційна назва JavaScript?");

// if (question === "ECMAScript") {
//     alert("Вірно!")
// } else {
//     alert("Не знаєте? ECMAScript!")
// }


//2. Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// let totalMinutes = prompt('Please enter amount of time: ');

// // 1. find how many hours 
// const hoursQty = Math.floor(totalMinutes / 60);
// const finalHours = String(hoursQty).padStart(2, "0");
// console.log(typeof hoursQty);
// console.log(finalHours);

// // 'abc'.padStart(10, "foo");  // "foofoofabc"

// const minutesQty = totalMinutes % 60;
// const finalMinutes = String(minutesQty).padStart(2, "0");
// console.log(minutesQty);

// const resultTime = `${finalHours}:${finalMinutes}`
// alert(`Now is ${resultTime}`);



//3. Напишіть цикл, який виводить в консоль
//числа от max до min по убыванию
// 3.1. Cкладіть усі парні числа от min до max
const max = 50;
const min = 23;
let total = 0;

for (let i = max; i >= min; i -= 1) {
    console.log(i);
    if(i % 2 === 0) {
        total += i;
    }
  }

  console.log("Total", total);

