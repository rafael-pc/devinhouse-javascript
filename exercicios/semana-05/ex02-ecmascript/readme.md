# Ecmascript vs Javascript

Se formos definir que há uma diferença, poderíamos dizer que o ECMAScript é a especificação, e que JavaScript é uma implementação por parte dos navegadores.
<br><br><br>

# Funcionalidades ES6 através de exemplos
<br>

## Funções auxiliares de array
<br>

Nessa especificação é que foram incorporadas uma variedade de funções auxiliares que antes só estavam disponíveis em bibliotecas externas, como o jQuery, axios e outras. As mais relevantes são:

- **forEach:** Iterar todos os elementos
- **map:** Iterar todos os elementos e fazer algo com seus valores
- **filter:** Filtrar os elementos dada uma condição
- **find:** Encontrar um elemento
- **every:** Verificar se todos os elementos respeitam dada condição
- **some:** Verifica se há pelo menos um elemento que respeita dada condição
- **reduce:** Reduzir os elementos em um único valor
Alguns exemplos de como utilizá-las:

```javaScript
var numeros = [1,2,3,4,5];

// forEach
numeros.forEach(function(numero){
  console.log(numero);
});

// map
var dobro = numeros.map(function(numero){
  return numero * 2
});
console.log(dobro); // 2, 4, 6, 8, 10

// filter
var maioresQueTres = numeros.filter(function(numero){
  return numero > 3
});
console.log(maioresQueTres); // 4, 5

// find
var tres = numeros.find(function(numero){
  return numero === 3;m
});
console.log(tres); // 3

// every
var todosMaiorQueZero = numeros.every(function(numero){
  return numero > 0
});
console.log(todosMaiorQueZero); // true

// some
var algumMaiorQueQuatro = numeros.some(function(numero){
  return numero > 4
});
console.log(algumMaiorQueQuatro); // true

// reduce
var soma = numeros.reduce(function(soma,numero){
  return soma + numero;
},0)
console.log(soma); // 15
```
<br><br>

## Declaração de variáveis com let e const
<br>

Um dos pontos mais complicados no JavaScript é entender como funciona o seu escopo de execução (this). Para facilitar, foram criadas o let e o const para declaração de variáveis. O let nos permite declarar variáveis e o const, declarar constantes (valores imutáveis). Mas a grande diferença em relação ao var está no seu escopo. Enquanto o var tem escopo de função, o const e o let possuem escopo de bloco (blocos são definidos por chaves {} ). 

Exemplo:

```javaScript
function funcao() {
  // escopo de função
  var x = 1;
  let y = 2;
  const z = 3;
  {
    var x = 10; // conseguimos sobreescrever o valor
    
    // escopo de bloco
    let y = 20;
    const z = 30;
    console.log(x); // 10
    console.log(y); // 20
    console.log(z); // 30
  }
  console.log(x); // 10
  console.log(y); // 2
  console.log(z); // 3
}

funcao();
```
<br><br>

## Arrow functions
<br>

De novo atacando o problema dos escopos de execução, chegaram as arrow functions. Elas são uma forma mais enxuta de definir funções utilizando a famosa fat arrow (=>). No entanto, existe diferença essencial: ele captura o contexto de execução do seu contexto delimitador. Isso evita fazer gambiarras como this = that. 

Exemplo:

```javaScript
var equipe = {
  nome: 'es6 masters',
  membros: [
    'Júlio',
    'Matheus',
    'Adriana',
    'Fernanda'
  ],
  
  mostraIntegrantes() {
    // sem a arrow function, não conseguiríamos acessar this.nome
    // teríamos que fazer this = that e então that.nome
    this.membros.forEach(membro => {
      console.log(membro + " faz parte de " + this.nome);
    });
  }
}

equipe.mostraIntegrantes();
```
<br><br>

## Template Strings
<br>

Viram no exemplo anterior como tivemos que construir a mensagem no console concatenando strings? Estamos acostumados a fazer isso, mas não deixa de ser ruim. Com o ES6, agora temos os template strings, que nos permite fazer interpolação de strings utilizando a crase e o cifrão acompanhado de chaves (${}).

Exemplo:

```javaScript
var pessoa = {
  nome: 'Diego',
  sobrenome: 'Martins de Pinho'
}

console.log(`Meu nome é ${pessoa.nome} ${pessoa.sobrenome}`);
```
<br><br>

## Valores padrões para parâmetros em funções
<br>

Agora é possível atribuir valores padrões para parâmetros de funções. Isso nos ajuda a evitar uma série de verificações dentro das funções para garantir que os valores não são nulos ou não definidos (undefined).

```javaScript
function multiplicaPor(valor, multiplcador = valor) {
  // caso o multiplicador não seja passado, ele será o próprio valor
  return multiplcador * valor;
}

multiplicaPor(2,3); // 6
multiplicaPor(2); // 4
```
<br><br>

## Melhorias em objetos literais
<br>

Objetos literais se tornaram bem mais fáceis de se criar. Veja como podemos atribuir propriedade com mesmo nome de variáveis facilmente, declarar funções sem usar a palavra reservada function e criar propriedades dinâmicas.

Exemplo:

```javascript
const autor = 'J. K. Rowling';
const titulo = 'Harry Potter';
const paginas = 'Paginas';

const livro = {
  autor, titulo,
  mostra() {
    console.log(`${this.titulo} escrito por ${this.autor}`)
  },
  ["numero" + paginas]: 572
}

livro.mostra(); // Harry Potter escrito por J. K. Rowling
console.log(livro.numeroPaginas); // 572
```
<br><br>

## Operadores Rest e Spread
<br>

Estes operadores nos ajudam a lidar com múltiplos parâmetros dentro de funções. O Rest prepara a função para receber um número indefinido de parâmetros, enquanto o Spread serve para passar vários parâmetros para uma função. Como nestes exemplos:

```javascript
// REST
function classificacao(primeiro, segundo, terceiro, ...outros) {
  console.log(`No pódio estão: ${primeiro}, ${segundo}, ${terceiro}. Os demais são: ${outros}`);
}

classificacao('Marcos', 'Luana', 'Rogério', 'Fernando', 'Felipe');
// No pódio estão: Marcos, Luana, Rogério. Os demais são: Fernando,Felipe


// SPREAD
const coresPrimarias = ['vermelho', 'azul', 'verde'];
const coresSecundarias = ['roxo', 'rosa', 'laranja'];

const todasCores = [...coresPrimarias, ...coresSecundarias];
console.log('todasCores', todasCores); // [ 'vermelho', 'azul', 'verde', 'roxo', 'rosa', 'laranja' ]
```
<br><br>

## Classes
<br>

Quem nunca se enrolou com a herança por prototipagem do JavaScript? Agora conseguimos trabalhar com classes da maneira como já estamos acostumados em outras linguagens de programação. Podemos até mesmo usar hierarquia.

Exemplo:

```javascript
class Carro {
  constructor(modelo,marca) {
    this.modelo = modelo;
    this.marca = marca;
  }
  
  andar() {
    console.log('vrum vrum');
  }
}

class ModeloA extends Carro {
  constructor(modelo, marca, cor) {
    super(modelo, marca);
    this.cor = cor;
  }
}

const carro = new ModeloA('A', 'Fiat', 'Amarelo');
console.log(carro.modelo, carro.marca, carro.cor);
carro.andar(); // vrum vrum
```
<br><br>

## Desestruturamento
<br>

Extrair informações de objetos e arrays ficou muito mais fácil também. Agora podemos criar variáveis que correspondem as propriedades do objeto tudo de uma vez usando chaves ( {} )

Exemplo:

```javascript
const VideoGame = {
  modelo: 'Xbox',
  fabricante: 'Microsoft',
  midia: 'Blu-Ray',
  armazenamento: '1TB',
  controles: 2,
  preco: 'R$ 2000.00'
}

const {modelo, fabricante} = VideoGame;
console.log(modelo, fabricante); // Xbox Microsoft
```




