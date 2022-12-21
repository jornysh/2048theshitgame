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