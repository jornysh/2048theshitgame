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