// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement



const listEl = document.createElement("ul");
console.log(listEl);
const buttonAdd = document.createElement("button");
const buttonRemove = document.createElement("button");
buttonAdd.textContent = "Add";
buttonRemove.textContent = "Remove";
const input = document.createElement("input");
document.body.append(listEl,buttonAdd,buttonRemove,input);

buttonAdd.addEventListener('click', addItem);

function addItem(){
    if(input.value ==='') return;
    const liEl = document.createElement("li");
    liEl.textContent = input.value;
    listEl.append(liEl);
    input.value = '';
    console.log(listEl.children);
    if (listEl.children.length %2 ===0){
        liEl.style.background = 'yellow';
    } else {
        liEl.style.background = 'blue';
    }
}

buttonRemove.addEventListener('click', removeItem);

function removeItem() {
    if(!listEl.lastChild) return;
    listEl.lastChild.remove();
  
}



