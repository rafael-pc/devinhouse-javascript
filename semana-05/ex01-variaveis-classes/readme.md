# Diferenças entre Let, Var, Const, Classes e Atributos

 - As declarações de var têm escopo global ou escopo de função enquanto let e const tem escopo de bloco.

Exemplos:

 ```JavaScript
var dizerOi = 'Oi tudo bem?';

function newFunction() {
    var dizerOi = 'Oi';
    console.log(dizerOi) // 'Oi'
 }
    console.log(dizerOi); // 'Oi tudo bem?'
 ```

 ```JavaScript
 let dizerOi = 'Oi';

 if(true) {
    let dizerOi = 'Oi tudo bem?';
    console.log(dizerOi); // 'Oi tudo bem?'
 }
    console.log(dizerOi); // 'Oi'
 ```

 ```JavaScript
 const dizerOi = 'Oi';

 if(true) {
    const dizerOi = 'Oi tudo bem?';
    console.log(dizerOi); // 'Oi tudo bem?'
 }
    console.log(dizerOi); // 'Oi'
 ```

- Variáveis var podem ser atualizadas e declaradas novamente dentro de seu escopo

Exemplo:

 ```JavaScript
 var cor = 'azul';
 var cor = 'red'; // alterando valor da variável
 ```

 ou

 ```JavaScript
 var cor = 'azul';
 cor = 'red'; // alterando valor da variável
 ```

 - Variáveis let podem ser atualizadas, mas não declaradas novamente

Exemplos:

 ```JavaScript
 let dizerOi = 'Oi';
 dizerOi = 'Oi tudo bem?';
 ```

 ```JavaScript
 let dizerOi = 'Oi';
 let dizerOi = 'Oi tudo bem?'; // error: Identifer 'dizerOi' has already been declared
 ```

- As variáveis const não podem ser atualizadas nem declaradas novamente.

 ```JavaScript
 const dizerOi = 'Oi';
 dizerOi = 'Oi tudo bem?'; // error: Assingment to constant variable.
 ```

 ```JavaScript
 const dizerOi = 'Oi';
 const dizerOi = 'Oi tudo bem?'; // error: error: Identifer 'dizerOi' has already been declared.
 ```

- Elas são todas jogadas até o topo de seu escopo. Mas enquanto as variáveis var são inicializadas com o valor de undefined, as variáveis let e const não são.

- Enquanto var e let podem ser declarados sem serem inicializados, variáveis declaradas com const devem ser inicializados durante a declaração.
<br><br><br>

# Classes

- Classe é uma estrutura que descreve estados e comportamentos de um determinado objeto, permitindo criar objetos muito mais organizados e bem elaborados utilizando todos os recursos possíveis de POO.

Syntax:

 ```JavaScript
 class ClassName {
     constructor(){}
 }
 ```

Exemplo:
 ```JavaScript
 class Car{
     constructor(name, year){
         this.name = name;
         this.year = year;
     }
 }
 ```

 Usando classes

```JavaScript
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
  const myCar = new Car("Ford", 2014);
  
  console.log(myCar.name + " " + myCar.year) // Ford 2014
```
<br><br>

# Atributos

Os Atributos em Programação Orientada a Objetos são os elementos que definem a estrutura de uma classe. Os atributos também são conhecidos como variáveis de classe, e podem ser divididos em dois tipos básicos: atributos de instância e de classe. Os valores dos atributos de instância determinam o estado de cada objeto. Um atributo de classe possui um estado que é compartilhado por todos os objetos de uma classe. Atributos de classe podem ser chamados também de atributos estáticos.
<br><br><br>

# Métodos

Um método é uma função que é propriedade de um objeto . Existem dois tipos de métodos: Métodos de instância,  que são tarefas internas executadas por uma instância de objeto, ou Métodos estáticos, que são tarefas chamadas diretamente em um construtor de objeto.
