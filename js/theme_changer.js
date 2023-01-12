theme = document.getElementById('theme');
activated = (document.cookie === 'theme=dark');
if (activated) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-body');
    document.cookie = "theme=dark";
} else {
    document.body.classList.remove('dark-body');
    document.body.classList.add('light-body');
    document.cookie = "theme=light";
}

console.log(document.cookie);
theme.onclick = function () {
    console.log('Changed theme');
    console.log(document.cookie);
    activated = !activated;
    console.log(activated);

    // let input = document.querySelector('.input');
    // let p = document.querySelector('p');
    // let list = document.querySelector('.list');
    console.log(document.body.classList)

    if (activated) {
        // input.style.background = "#1C53D6";
        // p.style.background = "#1C53D6";
        // list.style.background = "#1C53D6";
        document.body.classList.remove('light-body');
        document.body.classList.add('dark-body');

        document.cookie = "theme=dark";
    } else {
        // input.style.background = "#456BD9";
        // p.style.background = "#456BD9";
        // list.style.background = "#456BD9";
        document.body.classList.remove('dark-body');
        document.body.classList.add('light-body');

        document.cookie = "theme=light";
    }
    document.body.style.animation = "gradient 15s ease infinite";
}