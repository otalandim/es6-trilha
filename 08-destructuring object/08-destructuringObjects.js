
var data = {
    name: 'Otávio',
    surname: 'Landim',
    age: 32,
    blog: 'https://blog.otaviolandim.com.br',
    social: {
        twitter: '@otalandim',
        instagram: '@otalandim'
    }
};

//imprimindo os valores de name, surname e age sem utilizar destructuring objects
// const name = data.name;
// const surname = data.surname;
// const age = data.age;
// console.log(name);
// console.log(surname);
// console.log(age);

//imprimindo os valores utilizando o destructuring objects - declarando as variaveis oneline
// const { name, surname, age } = data;
// console.log(name);
// console.log(surname);
// console.log(age);

//imprimindo os valores utilizando o destructuring objects - declarando as variaveis oneline
// const { instagram, twitter } = data.social;
// console.log(instagram);
// console.log(twitter);

// const { instagram: insta } = data.social;
// console.log(insta);

//valor default
// const { city = 'Fortaleza' } = data;
// console.log(city);

//substituir valor do name pois ja consta o valor no obj
// const { street = 'Monsenhor Dantas', name = 'Isaac', surname = 'Isaac' } = data;
// console.log(name);
// console.log(street);
// console.log(surname);


/// destructuring objects arrays
// const array = ['Otávio', 'Landim', 32, 'Fortaleza'];
// const [ name, surname, age, city ] = array;
// console.log(name);
// console.log(surname);
// console.log(age);
// console.log(city);

// destructuring swap variables
let a = 42;
let b = 21;
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);