let childs = document.body.children;

let popup = document.createElement('div');
popup.className = 'popup'
popup.style.width = '100%'
popup.style.height = '100%'
popup.style.backgroundColor = `rgba(49, 49, 49,0.9)`
popup.style.flexDirection = `column`

document.body.appendChild(popup)

let infoAboutTag = (tag) => {
    popup.classList.toggle('showPopup')

    let tagName = `Тег цього елементу - ${tag.tagName}`;
    let classlist = tag.classList.value ? `Класи цього елемента : ${tag.classList.value}` : 'цьому елементу не присвоєно жодного класу';
    let id = tag.id ? `ID цього елементу - "${tag.id}"` : `у цього елемента немає ID`;
    let heightWidth = `висота*ширина цього обєкта = ${tag.offsetHeight}px*${tag.offsetWidth}px`;

    popup.innerHTML = '<p>' + tagName + '</p>' + '<p>' + classlist + '<p/>' + '<p>' + id + '<p/>' + '<p>' + heightWidth + '<p/>'
}

let findChilds = (elements) => {
    for (let item of elements) {
        item.addEventListener('click', function() {
            infoAboutTag(item);
            event.stopPropagation();
        })
        if (item.children.length > 0) {
            findChilds(item.children)
        };
    };
};

findChilds(childs);