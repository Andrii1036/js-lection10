// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике 
// на кнопку исчезал элемент с id="text".
let firstWrapper = document.createElement('div');
let paragraph = document.createElement('p');
let button = document.createElement('button');
let showText = true;

let hideShowText = () => {
    showText = !showText;
    appendChild()
};

firstWrapper.style.cssText = 'border:2px solid black;'
paragraph.id = 'text';
paragraph.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus soluta facere ipsa eius? Autem, perferendis. Fugiat eveniet ipsum, quidem ut velit assumenda accusamus, possimus quis labore architecto consectetur obcaecati asperiores?'
button.innerText = 'Hide/show text';
button.onclick = hideShowText

function appendChild() {
    if (showText) {
        firstWrapper.appendChild(paragraph);
    } else {
        firstWrapper.removeChild(paragraph)
    }

    firstWrapper.appendChild(button);
};
document.body.appendChild(firstWrapper);
appendChild();
// ---------------------------------------------------------------------------------------------

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let secondWrapper = document.createElement('div');
secondWrapper.style.cssText = 'border:2px solid black; margin-top:15px';
let button2 = document.createElement('button');
button2.innerText = 'Hide button';
let toogleClass = function() {
    this.classList.toggle('active')
};
button2.onclick = toogleClass;
secondWrapper.appendChild(button2);
document.body.appendChild(secondWrapper);
// ------------------------------------------------------------------------------------------------

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати 
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let thirdWrapper = document.createElement('div');
thirdWrapper.style.cssText = 'border:2px solid black; margin-top:15px; position:relative;';
let input = document.createElement('input');
input.setAttribute('type', 'number');
input.setAttribute('name', 'age')
let button3 = document.createElement('button');
button3.innerText = 'Перевірити';
let popup = document.createElement('p');
popup.className = 'popup';
popup.id = 'popup'

let showPopup = function(text) {
    let popup = document.getElementById('popup');
    popup.innerText = text;
    popup.classList.toggle('showPopup')
}

button3.appendChild(popup)
thirdWrapper.append(input, button3);
document.body.appendChild(thirdWrapper);

let isEighteen = () => {
    let input = document.getElementsByName('age')[0];
    if (+input.value >= 18) {
        showPopup('Вам вже виповнилось 18 років!!!');
    } else if (!input.value) {
        showPopup('Введіть свій вік');
    } else {
        showPopup('Вам менше 18 років!!!');
    }
};

button3.onclick = isEighteen;
// ----------------------------------------------------------------------------------------------

// - Создайте меню, которое раскрывается/сворачивается при клике

let showHideMenu = () => {
    let menu = document.getElementsByClassName('menu')[0];
    menu.classList.toggle('showMenu')
};
// -------------------------------------------------------------------------------------------

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
let posts = [{
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
        title: "magnam facilis autem",
        body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
        title: "dolorem dolore est ipsam",
        body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
        title: "nesciunt iure omnis dolorem tempora et accusantium",
        body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
        title: "optio molestias id quia eum",
        body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
        title: "et ea vero quia laudantium autem",
        body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },

];
let postsWrapper = document.createElement('div');
postsWrapper.style.cssText = 'border:2px solid black; margin-top:15px; padding:10px';

let showPost = function() {
    let father = this.parentElement
    let p = father.childNodes[1];
    p.classList.toggle('showPost')
    let button = father.getElementsByTagName('button')[0];
    if (p.classList.contains('showPost')) {
        button.innerText = 'Показати пост'
    } else {
        button.innerText = "Заховати пост"
    };
};

for (let post of posts) {
    let postcontainer = document.createElement('div');
    postcontainer.style.cssText = 'border:2px solid black; margin:10px; padding:5px'
    let postTitle = document.createElement('h2');
    let postBody = document.createElement('p');
    let button = document.createElement('button');
    button.onclick = showPost

    postTitle.innerText = post.title;
    postBody.innerText = post.body;
    button.innerText = "Заховати пост";

    postcontainer.append(postTitle, postBody, button);
    postsWrapper.appendChild(postcontainer);
};
document.body.appendChild(postsWrapper);
// -------------------------------------------------------------------------