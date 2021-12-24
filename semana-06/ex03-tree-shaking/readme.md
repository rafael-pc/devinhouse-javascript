# Tree shaking

Tree shaking é uma técnica de otimização de código JavaScript, com a evolução da linguagem os códigos ficam cada vez maiores e assim surgiu a necessidade de modula-los em blocos que são chamados conforme a necessidade, isso é feito atravez de depêndencias por meio das instruções import e export.

A medida que o código cresce muitas partes deixam de ser útilizadas e como resultado o código fica mais pesado com depêndencias que não são mais utilizadas, e com proposito de resolver esse problema o Tree shaking (Sacudir Árvore) mantém as instâncias que estão sendo utilizadas deixando de lado as que não estão e assim melhorar a atimização, para auxiliar nessa tarefa foram criadas ferramentas como Babel para atender essa necessidade.

Exemplo de modulo:

```javascript
// importação de modulo
import { exemplo1, exemplo2, exemplo3 } from "modulo";
```
