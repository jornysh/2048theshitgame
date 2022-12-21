function button() {
    // window.open('about.html');

    let message = {
        'receiver' : document.querySelector(".receiver").value,
        'theme' : document.querySelector(".mail-theme").value,
        'text' : document.querySelector("textarea").value
    };

    console.log(message);
}

function addNewFile(name) {
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.innerHTML = name;
    ul.appendChild(li);
}

fileUploader = document.getElementById('file-input');
list = document.getElementById('list');

fileUploader.onchange = function() {
    let files = event.target.files;
    list.style.display = 'block';

    let del = document.getElementById('empty-list');
    del.style.display = 'none';
    for (let i = 0; i < files.length; i++) {
        console.log(files[i].name);
        addNewFile(files[i].name);
    }
}
theme = document.getElementById('theme');
activated = false;
console.log('123')
theme.onclick = function () {
    console.log('Changed theme');
    activated = !activated;
    console.log(activated);

    let body = document.querySelector('body');
    // let input = document.querySelector('.input');
    // let p = document.querySelector('p');
    // let list = document.querySelector('.list');

    if (activated) {
        body.style.background = "linear-gradient(45deg, #4B155C, #471578) no-repeat center center fixed";
        // input.style.background = "#1C53D6";
        // p.style.background = "#1C53D6";
        // list.style.background = "#1C53D6";
    } else {
        body.style.background = "linear-gradient(45deg, rebeccapurple, lightcoral) no-repeat center center fixed";
        // input.style.background = "#456BD9";
        // p.style.background = "#456BD9";
        // list.style.background = "#456BD9";
    }
}
