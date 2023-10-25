
var outputElement = document.getElementById('output');

document.body.addEventListener('keydown', function (e) {
    var key = e.key;
    outputElement.innerText = 'Keydown = ' + key;
});

document.body.addEventListener('keyup', function (e) {
    var key = e.key;
    outputElement.innerText = 'KeyUp = ' + key;
});

document.body.addEventListener('keypress', function (e) {
    var key = e.key;
    outputElement.innerText = 'Keypress = ' + key;
});
