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

