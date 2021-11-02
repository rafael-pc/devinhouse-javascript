var array = [];
var word;

function arraySections() {
    for (var i = 0; i < array.length; i++) {
        let element = document.createElement('section');
        element.innerHTML = array.sort((a, b) => (a > b ? -1 : 1))[i];
        document.body.appendChild(element);
    }
}

function arrayFunction(word, callback) {
    while (word !== 'parar') {
        var word = prompt('Digite uma palavra:');
        array.push(word);
        if (word === 'parar') {
            array.pop();
        }
    }
    callback();
}

arrayFunction(word, arraySections);

console.log(array);