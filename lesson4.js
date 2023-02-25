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

// Створити червоний квадрат розміром 50 на 50 рх
// Додати кнопку "Зменшити", яка робить квадрат менше на 10 пікселів
// Додати кнопку "Збільшити", яка робить його більше на 10 пікселів.

let size = 50;
// const squareEl = document.createElement("div");
// changeSize(size);
// squareEl.style.background = `red`;

// const enlargeBtn = document.createElement("button");
// enlargeBtn.textContent = "Збільшити";
// const shrinkBtn = document.createElement("button");
// shrinkBtn.textContent = "Зменшити";

// document.body.append(squareEl, enlargeBtn, shrinkBtn);

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
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

const items = document.querySelectorAll('.listItem');

const buttonEl = document.querySelector('#double');

buttonEl.addEventListener('click', doubleValues);

function doubleValues() {
    items.forEach(item=> item.textContent *= 2)
}
