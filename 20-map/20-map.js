//Map: define chave e valor, muito parecido com o objeto

let m = new Map();

console.log(m.size);
//setando chave e valor
m.set('a', 10);
m.set('b', 11);
m.set('c', 12);

//saber o tamanho do map pelo size()
console.log(m.size);

//remover do map passando a chave q quer remover
m.delete('c');
console.log(m.size);
