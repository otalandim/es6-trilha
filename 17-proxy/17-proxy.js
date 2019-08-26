let obj = {
    name: 'Otávio',
    age: 32
};

let proxy = new Proxy(obj, {
    get(target, name){
        console.log('Blabla bla bla bla bla!');
        return target[name];
    },
    set(target, name, value){
        console.log('Blbablblalalbvalvbkal');
        target[name] = value;
    }
});