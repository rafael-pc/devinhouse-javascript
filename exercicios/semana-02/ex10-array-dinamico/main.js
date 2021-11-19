var array = []
var word

function arraySections() {
    for (var i = 0; i < array.length; i++) {
        let element = document.createElement('section');
        element.innerHTML = (array.sort(function (a, b) { return a.length - b.length })[i]).length;
        document.body.appendChild(element);
    }
}

function arrayFunction(word, callback) {
    while (word !== 'parar') {
        var word = prompt('Digite uma palavra:')
        array.push(word);
        if (word === 'parar') {
            array.pop();
        }
    }
    callback();
}

arrayFunction(word, arraySections);

console.log(array);