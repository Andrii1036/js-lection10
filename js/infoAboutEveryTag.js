let childs = document.body.children;

let infoAboutTag = (tag) => {
    console.log(`Тег цього елементу - <${tag.tagName}>`);
    console.log(tag.classList.value ? `Класи цього елемента : ${tag.classList.value}` : 'цьому елементу не присвоєно жодного класу');
    console.log(tag.id ? `ID цього елементу - "${tag.id}"` : `у цього елемента немає ID`);
    console.log(`висота*ширина цього обєкта = ${tag.offsetHeight}px*${tag.offsetWidth}px`);
    console.log('--------------------------------------------')
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