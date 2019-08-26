
var text = 'Fortaleza'; //iterable
var it = text[Symbol.iterator](); //iterator

// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );
// console.log( it.next() );


for(letter of text){
    console.log(letter);
    if (letter === 'a') break;
}