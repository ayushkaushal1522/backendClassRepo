// let maths = require('./app1');
let {pi:hello , sqr , add} = require('./app1');
// here pi gets overidden by the hello.
// console.log(maths);
console.log(hello);
console.log(sqr(6));
console.log(add(4,8));
