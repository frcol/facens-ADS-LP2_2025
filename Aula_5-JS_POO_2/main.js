const MyClass = require('./MyClass');
const Pessoa = require('./Pessoa');

let obj = new MyClass('Fulano', 30);
obj.imprimir();

let obj2 = new Pessoa('Ciclano', '123.456.789-00');
obj2.imprimir();