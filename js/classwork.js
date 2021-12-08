// -----------------------------------------------------------------------------
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку 
// при кліку на яку считується та виводиться на
//  консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм 
// (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. 
// Отже дайте формі та інпутам всі необхідні атрибути.

let formsWrapper = document.createElement('div');
formsWrapper.style.cssText = 'border: 2px solid black ';
let form1 = document.createElement('form');
form1.setAttribute('action', '#');
form1.setAttribute('name', 'fullname');
let form2 = document.createElement('form');
form2.setAttribute('action', '#');
form2.setAttribute('name', 'address');
let button = document.createElement('button');
button.innerText = 'Вивести в консоль';
let input1 = document.createElement('input');
input1.name = 'userName';
input1.type = 'text';
input1.placeholder = 'Name';
let input2 = document.createElement('input');
input2.name = 'userSurname';
input2.type = 'text';
input2.placeholder = 'Surname';
let input3 = document.createElement('input');
input3.name = 'userCity';
input3.type = 'text';
input3.placeholder = 'City';
let input4 = document.createElement('input');
input4.name = 'userStreet';
input4.type = 'text';
input4.placeholder = 'Street';

let forms = document.forms;
let showFormsValue = () => {
    for (let form of forms) {
        let elements = form.elements
        for (let element of elements) {
            console.log(`${element.name}-${element.value}`)
        }
    }
};

button.onclick = showFormsValue

form1.append(input1, input2);
form2.append(input3, input4)
formsWrapper.append(form1, form2, button);
document.body.appendChild(formsWrapper);
// ------------------------------------------------------------------------------------

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let tableWrapper = document.createElement('div');
tableWrapper.style.cssText = 'border: 2px solid black; margin-top:15px';
let rowInput = document.createElement('input');
rowInput.name = 'numberOfRows';
rowInput.type = 'number';
rowInput.placeholder = 'numberOfRow';
let columnInput = document.createElement('input');
columnInput.name = 'numberOfColumn';
columnInput.type = 'number';
columnInput.placeholder = 'numberOfColumn';
let contentInput = document.createElement('input');
contentInput.name = 'content';
contentInput.type = 'text';
contentInput.placeholder = 'content'
let button2 = document.createElement('button');
button2.innerText = 'Сформувати табличку';


let createTable = () => {
    let numberOfRows = +rowInput.value;
    let numberOfColumn = +columnInput.value;
    let content = contentInput.value;
    let table = document.createElement('div');
    table.style.cssText = 'margin:10px';
    for (let i = 0; i < numberOfRows; i++) {
        let row = document.createElement('div');
        row.style.cssText = 'display:flex';
        for (let c = 0; c < numberOfColumn; c++) {
            let column = document.createElement('div');
            column.style.cssText = 'border:1px solid black;padding:10px'
            column.style.maxWidth = `calc(100%/${numberOfColumn})`;
            column.innerText = content;
            row.appendChild(column);
        };
        table.appendChild(row);
    };
    tableWrapper.appendChild(table);
};

button2.onclick = createTable

tableWrapper.append(rowInput, columnInput, contentInput, button2);
document.body.appendChild(tableWrapper);
// ---------------------------------------------------------------------------------------------------

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

let swearWords = [
    'цензура1', 'цензура2', 'цензура3', 'цензура4', 'цензура5', 'цензура6', 'цензура7', 'цензура8',
];

let swearWordsWrapper = document.createElement('div');
swearWordsWrapper.style.cssText = 'border: 2px solid black; margin-top:15px';
let swearWordsInput = document.createElement('input');
swearWordsInput.name = 'swearWord'
swearWordsInput.type = 'text';
let swearWordsButton = document.createElement('button');
swearWordsButton.innerText = 'Перевірити на наявність лайки';

let isSwearWord = () => {
    let word = document.getElementsByName('swearWord')[0].value;
    let wordArray = word.split(' ');
    for (word of wordArray) {
        if (swearWords.includes(word)) {
            alert('Не виражайтесь!!!!')
        };
    };
};

swearWordsButton.onclick = isSwearWord;

swearWordsWrapper.append(swearWordsInput, swearWordsButton);
document.body.appendChild(swearWordsWrapper);
// ----------------------------------------------------------------------------