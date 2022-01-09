// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// !!!!!!!!!!!!!!!!!!!!!!!  ЗАПУСТІТЬ СКРІПТ infoAboutEveryTag.js !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ------------------------------------------------------------------------------------------------------------------

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// !!!!!!!!!!!!!!!!!!!!!!!  ЗАПУСТІТЬ СКРІПТ popUpInfoAboutTag.js !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ---------------------------------------------------------------------------------------------------------------------


// -- взять массив пользователей
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать 
// как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let usersWithAddress = [
    { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
    { id: 3, name: 'kolya', age: 28, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
    { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
    { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
];

let mainWrapper = document.createElement('div');
let usersWithAddressWrapper = document.createElement('div');
usersWithAddressWrapper.style.cssText = 'display:flex;padding:10px; gap:10px; flex-wrap:wrap; justify-content:center;'
let checkBoxWrapper = document.createElement('div');
checkBoxWrapper.style.cssText = 'display:flex; justify-content: center;gap:15px;margin:20px;'
let firstInput = document.createElement('input');
let secondInput = document.createElement('input');
let thirdInput = document.createElement('input');
firstInput.type = 'checkbox';
secondInput.type = 'checkbox';
thirdInput.type = 'checkbox';
let labelForFirstInput = document.createElement('label');
let labelForSecondInput = document.createElement('label');
let labelForThirdInput = document.createElement('label');
labelForFirstInput.innerText = 'статус False';
labelForSecondInput.innerText = 'старше 29 років, включно';
labelForThirdInput.innerText = 'місто Київ';

let isFirstInputChacked = false;
let isSecondInputChacked = false;
let isThirdInputChacked = false;

firstInput.addEventListener('change', function() {
    isFirstInputChacked = !isFirstInputChacked;
    filterredArray();
});
secondInput.addEventListener('change', function() {
    isSecondInputChacked = !isSecondInputChacked;
    filterredArray();
});
thirdInput.addEventListener('change', function() {
    isThirdInputChacked = !isThirdInputChacked;
    filterredArray();
});


let addUserToWrapper = (array) => {
    usersWithAddressWrapper.innerText = ''
    for (let item of array) {
        let userCard = document.createElement('div');
        userCard.style.cssText = 'width:200px; background:green; border:1px solid black'
        let findKey = (item) => {
            for (let key in item) {
                let itemRow = document.createElement('p');
                itemRow.style.cssText = 'display:flex'
                let itemKey = document.createElement('p');
                let itemValue = document.createElement('p');

                if (typeof item[key] === 'object') {
                    findKey(item[key])
                } else {
                    itemKey.innerText = `${key} :`;
                    itemValue.innerText = item[key];

                    itemRow.append(itemKey, itemValue);
                    userCard.appendChild(itemRow);
                };

            };
            usersWithAddressWrapper.appendChild(userCard);
        };
        findKey(item);
    };
};

function filterredArray() {
    let filteredUsers = usersWithAddress;
    if (isFirstInputChacked) {
        filteredUsers = filteredUsers.filter(item => item.status === false)
    }
    if (isSecondInputChacked) {
        filteredUsers = filteredUsers.filter(item => item.age >= 29)
    }
    if (isThirdInputChacked) {
        filteredUsers = filteredUsers.filter(item => item.address.city === 'Kyiv')
    }
    addUserToWrapper(filteredUsers)

}

addUserToWrapper(usersWithAddress);
labelForFirstInput.appendChild(firstInput)
labelForSecondInput.appendChild(secondInput)
labelForThirdInput.appendChild(thirdInput)
checkBoxWrapper.append(labelForFirstInput, labelForSecondInput, labelForThirdInput)
mainWrapper.append(checkBoxWrapper, usersWithAddressWrapper)

document.body.appendChild(mainWrapper);
// -----------------------------------------------------------------------------------------------------


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let sliderItems = document.getElementsByClassName('slider_item');
let count = 1;

for (let item of sliderItems) {
    item.id = `sliderItem${count}`;
    count++;
};
// ---------

let leftArrow = document.getElementById('lefthArrow');
let rightArrow = document.getElementById('rightArrow');

let sliderCount = 1;
let slider = document.getElementsByClassName('slider_items')[0]

let changeActiveItem = (action) => {
    if (sliderCount > sliderItems.length) {
        sliderCount = 1
    };
    if (sliderCount === 0) {
        sliderCount = sliderItems.length
    }

    let activeItem = document.getElementsByClassName('slider_item-active')[0];
    let nextActiveItem = document.getElementById(`sliderItem${sliderCount}`);
    activeItem.classList.remove('slider_item-active');
    slider.removeChild(activeItem);
    nextActiveItem.classList.add('slider_item-active');
    if (action === 'right') {
        slider.appendChild(activeItem);
    } else {
        slider.insertBefore(activeItem, slider.firstChild)
    }
};

leftArrow.addEventListener('click', function() {
    sliderCount--
    changeActiveItem('left')
});
rightArrow.addEventListener('click', function() {
    sliderCount++
    changeActiveItem('right')
});
// -------------------------------------------------------------------------------------------