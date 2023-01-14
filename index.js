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
// const max = 50;
// const min = 23;
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//     console.log(i);
//     if(i % 2 === 0) {
//         total += i;
//     }
//   }

//   console.log("Total", total);

// const max = 50;
// const min = 23;
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//     console.log(i);
//     if(i % 2 !== 0) {
//         continue;
        
//     }
//     total += i;
//   }

//   console.log("Total", total);

//5. Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// const loginInput = prompt("Введіть свій логін");

// console.log(loginInput);

// if (loginInput === "Адмін") {
//     const passwordInput =  prompt("Введіть свій пароль");
//     if (passwordInput === "Я головний") {
//         console.log("Вітаю!");
//     } else {
//         console.log("Невірний пароль")
//     }
// } else if (loginInput === null || loginInput === "") {
//     console.log("Скасовано");
// } else {
//     console.log("Я вас не знаю");
// }

// const loginInput = prompt("Введіть свій логін");
// console.log(loginInput);
// switch (loginInput) {
//     case "Адмін":
//         const passwordInput =  prompt("Введіть свій пароль");
//         if (passwordInput === "Я головний") {
//             console.log("Вітаю!");
//         } else {
//             console.log("Невірний пароль")
//         }
//         break;
//         case null:
//         case "" :  console.log("Скасовано");
//             break;
//     default:
//         console.log("Я вас не знаю");
//         break;
// }

// const loginInput = prompt("Введіть свій логін");
// console.log(loginInput);
// switch (loginInput) {
//     case "Адмін":
//         const passwordInput =  prompt("Введіть свій пароль");
//         console.log(passwordInput === "Я головний" ? "Вітаю!" : "Невірний пароль")
       
//         break;
//         case null:
//         case "" :  console.log("Скасовано");
//             break;
//     default:
//         console.log("Я вас не знаю");
//         break;
// }

// 6. При завантаженні сторінки користувачу пропонується
//в prompt ввести число. Ввод додається к значенню
//змінної total.
//Операція вводу числа продовжується до тих пір,
//доки користувач не натисне кнопку Cancel в prompt.
//Після того як користувач закінчив ввод натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сумма введенних чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів, не потрібно.

// let numberInput = prompt("Введіть число");

// let total = 0;

// // while (numberInput) {
// //     total += Number(numberInput);
// //     numberInput = prompt("Введіть число");
// // }
// // alert(`Загальна сумма введенних чисел дорівнює ${total}.`)

// if (numberInput) {
//     total += Number(numberInput);
//     numberInput = prompt("Введіть число");
// }
// alert(`Загальна сумма введенних чисел дорівнює ${total}.`)



// let numberInput = prompt("Введіть число");
// let total;

// numberInput = Number(numberInput);
// while (numberInput) {
//     console.log(typeof numberInput === 'string');
//     // numberInput = Number(numberInput);
//     if (typeof numberInput === 'string') {
//         numberInput = 0;
//     }

//     total += numberInput;
//     numberInput = prompt("Введіть число");
// }

// alert(total);


// /7. Напишіть цикл, який пропонує ввести
//число більше 100 через prompt.
//Якщо користувач ввів інше число - попросити
//ввести ще раз и так далі.
//Цикл повинен питати число, доки користувач не
//введе число більше 100, чи не натисне кнопку
//Cancel в prompt

// let inputValue = prompt("введіть число більше 100");

// while (inputValue < 100)  {
//     inputValue = prompt("Enter other number: ");

// } 

// console.log(inputValue);







// 8. В змінній min є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).

// const minuteValue = Math.random() * (59 - 0) + 0;



//9. Є рядок, який складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є літера 'a'.
// Якщо це так - виведіть 'Так', в іншому випадку - 'Ні'.

// const message = "ahgkdkd";