// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const listEl = document.createElement("ul");
// console.log(listEl);
// const buttonAdd = document.createElement("button");
// const buttonRemove = document.createElement("button");
// buttonAdd.textContent = "Add";
// buttonRemove.textContent = "Remove";
// const input = document.createElement("input");
// document.body.append(listEl,buttonAdd,buttonRemove,input);

// buttonAdd.addEventListener('click', addItem);

// function addItem(){
//     if(input.value ==='') return;
//     const liEl = document.createElement("li");
//     liEl.textContent = input.value;
//     listEl.append(liEl);
//     input.value = '';
//     console.log(listEl.children);
//     if (listEl.children.length %2 ===0){
//         liEl.style.background = 'yellow';
//     } else {
//         liEl.style.background = 'blue';
//     }
// }

// buttonRemove.addEventListener('click', removeItem);

// function removeItem() {
//     if(!listEl.lastChild) return;
//     listEl.lastChild.remove();

// }

// ==========================================================

// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }
// const figureEl = document.createElement('div');
// createFigure()
// document.body.append(figureEl);

// figureEl.addEventListener('click', createFigure);

// function createFigure() {

//     const index = randomither(forms.length);
// figureEl.style.cssText = forms[index];
// figureEl.style.background = getRandomHexColor();
// figureEl.style.position = 'absolute';
// figureEl.style.top = `${randomither(100)}%`;
// figureEl.style.left = `${randomither(100)}%`;

// }

// ==========================================================

// Створити червоний квадрат розміром 50 на 50 рх
// Додати кнопку "Зменшити", яка робить квадрат менше на 10 пікселів
// Додати кнопку "Збільшити", яка робить його більше на 10 пікселів.

// let size = 50;

// Метод append

// const squareEl = document.createElement("div");
// changeSize(size);
// squareEl.style.background = `red`;

// const enlargeBtn = document.createElement("button");
// enlargeBtn.textContent = "Збільшити";
// const shrinkBtn = document.createElement("button");
// shrinkBtn.textContent = "Зменшити";

// document.body.append(squareEl, enlargeBtn, shrinkBtn);

// Метод insertAdjacentHTML

// const markup = `<div style="background: red; width: ${size}px; height: ${size}px"></div> <button class="enlarge">Збільшити</button> <button class="shrink">Зменшити</button>`;

// document.body.insertAdjacentHTML("afterbegin", markup);

// const enlargeBtn = document.querySelector(".enlarge");
// const shrinkBtn = document.querySelector(".shrink");
// const squareEl = document.querySelector("div");

// enlargeBtn.addEventListener("click", enlargeOnClick);

// shrinkBtn.addEventListener("click", shrinkOnClick);

// function enlargeOnClick() {
//   size += 10;
//   changeSize(size);
// }

// function shrinkOnClick() {
//   if (size === 10) return;
//   size -= 10;
//   changeSize(size);
// }

// function changeSize(size) {
//   squareEl.style.height = `${size}px`;
//   squareEl.style.width = `${size}px`;
// }

// ==========================================================

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// const inputEl = document.querySelector('#passwordInput');
// const buttonEl = document.querySelector('#passwordButton');

// buttonEl.addEventListener('click', changeEl);

// function changeEl() {
//     if (buttonEl.textContent === "Розкрити") {
//         inputEl.style.color = 'inherit';
//         buttonEl.textContent = "Приховати";
//     } else {
//         inputEl.style.color = 'transparent';
//         buttonEl.textContent = "Розкрити";
//     }

// }

// ==========================================================

/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

// const items = document.querySelectorAll('.listItem');

// const buttonEl = document.querySelector('#double');

// buttonEl.addEventListener('click', doubleValues);

// function doubleValues() {
//     items.forEach(item=> item.textContent *= 2)
// }

// ==========================================================

/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

// const squareEls = document.querySelectorAll(".gridItem");

// squareEls.forEach((square) => {
//   square.addEventListener("mouseenter", () => {
//     square.classList.add("hide");
//   });
//   square.addEventListener("mouseleave", () => {
//     square.classList.remove("hide");
//   });
// });

// ==========================================================

// HOMEWORK:

/*
Завдання 2 (Див. розмітку в index.html)
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const btnEl = document.querySelector('#swapButton');
// const leftSwapInputEl = document.querySelector('#leftSwapInput');
// const rightSwapInputEl = document.querySelector('#rightSwapInput');

// const handleBtn = (e) => {
//     const leftSwapValue = leftSwapInputEl.value;
//     const rightSwapValue = rightSwapInputEl.value;
//     leftSwapInputEl.value = rightSwapValue;
//     rightSwapInputEl.value = leftSwapValue;
// };

// btnEl.addEventListener('click', handleBtn);

// ==========================================================

/*
Завдання 7 (Див. розмітку в index.html і стилі в styles.css)
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
*/

// const circleEl = document.querySelector('.outerCircle');
// console.log(circleEl);

// const handleCircleMove = e => {
// }

// circleEl.addEventListener('mousemove', handleCircleMove);

// ==========================================================

/*
Завдання 12 (Див. розмітку в index.html)
Клік по кнопці замінює символ першого поля введення на
символ з другого поля введення в усьому тексті.
Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.
*/

// const btnEl = document.querySelector('#replaceButton');
// const textEl = document.querySelector('.text');
// const inputFromEl = document.querySelector('#from');
// const inputToEl = document.querySelector('#to');

// const handleBtn = (e) => {
//     if (inputFromEl.value === "" || inputToEl.value === "") alert('Заповни всі поля!');
//     else {
//         textEl.textContent = textEl.textContent.replaceAll(`${inputFromEl.value}`, `${inputToEl.value}`);
//     }
// }

// btnEl.addEventListener('click', handleBtn);

// ==========================================================

// Завдання 14 (Див. розмітку в index.html і стилі в styles.css)
// Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey

// const thumbEl = document.querySelector('.eventThumb');
// const eventList = document.createElement('ul');
// eventList.classList.add('eventList')
// thumbEl.append(eventList);

// const handleKeyboardClick = (e) => {
//     const keyItem = document.createElement('li');
//     const codeItem = document.createElement('li');
//     eventList.append(keyItem);
//     eventList.append(codeItem);
//     keyItem.textContent = e.key;
//     codeItem.textContent = e.code;
//     keyItem.classList.add('eventKey');
//     codeItem.classList.add('eventCode');
// }

// document.addEventListener('keydown', handleKeyboardClick)

// ==========================================================

/*
Завдання 11 (Див. розмітку в index.html)
Наведено список людей. Зроби фільтр на ім'я/прізвище.
*/

const inputEl = document.querySelector('.contactsFilter');
const contactsList = document.querySelector('.contacts');
const contactsItem = document.querySelectorAll('.contact');
console.log(contactsList.textContent);
const handleTextInput = (e) => {
    const inputQuery = inputEl.value.toLowerCase().trim();
    contactsItem.forEach((item) => {
        const name = item.textContent.toLowerCase();
        if (name === inputQuery) {
            contactsList.innerHTML = `<li class="contact">${item.textContent}</li>`;
        } else return;
    })
}

inputEl.addEventListener('input', handleTextInput)