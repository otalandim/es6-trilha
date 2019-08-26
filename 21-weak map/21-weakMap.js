

let obj1 = {
    name: 'Otávio',
    age: 32
};

let obj2 = {
    name: 'Landim',
    age: 32
};

let wm = new WeakMap();
wm.set(obj1, 'bla bla bla');
wm.set(obj2, 'la la la');

//se remover o objeto ele ira perder a referencia do objeto apos fazer isso e o garbage collection remove isso por conta da memoria
//obj1 = null;

