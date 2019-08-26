//forma antiga es5
//class
// function Animal(kind, sound){ //parameters
//     //constructor
//     this.kind = kind;
//     this.sound = sound;
// }

//method
// Animal.prototype.hello = function() {
//     console.log(`${this.sound} Eu sou um ${this.kind}`);
// }

//const dog = new Animal('dog','auauau');
// const cat = new Animal('cat','miau');

// console.log(dog.kind);
// console.log(dog.sound);
// console.log(cat.hello());


//forma nova es6

class Animal {
    constructor(kind, sound){
        this.kind = kind;
        this.sound = sound;
    }

    hello(){
        console.log(`${this.sound} Eu sou um ${this.kind}`);
    }

    static info(){
        console.log('This is a class to create animals!');
    }

    get name(){
        console.log(`${this.sound} My name is Jake!`);
    }

    set nickname(nike){
        this.nike = nike;
    }
}

class Dog extends Animal {
    constructor(name, sound){
        super(name);
        this.sound = sound;
    }

    bark(){
        console.log(`${this.sound} eu sou um ${this.name}`);
    }
}

const dog = new Animal('dog','auauau');
const cat = new Animal('cat','miau');

console.log(cat.hello());
console.log(cat.name);