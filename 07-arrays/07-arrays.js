//Array.from
console.log('Array.from');
const text = 'Otávio';
console.log(Array.from(text));
//const list = document.querySelectorAll('#list li');
//const listArray = Array.from(list);
//console.log(listArray);

// const names = listArray.map((name) => name.textContent);
// console.log(names);

//Array.of
const arry = Array.of(1, 3, 'Otávio', {});
console.log(arry.length);

//Array.find e Array.findIndex
console.log('---> Array.find && Array.findIndex <---');
const array = [1, -5, 0, -2];
const underzero = array.find(number => number < 0);
const underzeroIndex = array.findIndex(number => number < 0);

console.log(`---> Array inicial: ${array}`);
console.log(`---> Array aplicando metodo find: ${underzero}`);
console.log(`---> Array aplicando metodo findIndex: ${underzeroIndex}`);

//Array.fill
console.log('Array.fill');
const arr = new Array(10);
arr.fill('lol', 1, 6);
console.log(arr);

const newArr = [1, 2, 3, 4, 5, 6];
newArr.fill('vamos leao');
console.log(newArr);
