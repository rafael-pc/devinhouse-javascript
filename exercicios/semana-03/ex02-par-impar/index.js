function functionButton() {
    let numero = document.querySelector('#num').value;
    if (numero % 2 === 0)
        alert('Par');
    else
        alert('Impar');
}