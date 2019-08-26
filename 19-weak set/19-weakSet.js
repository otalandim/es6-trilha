///WeakSet: Similar ao Set, porem com alguns diferenças entre elas aceita apenas objeto e não aceita tipos primitivos (number, string) 

let obj1 = {
    name: 'Otávio',
    age: 32
};

let obj2 = {
    name: 'Landim',
    age: 32
};

let set = new WeakSet(['líder', 'segue_o_líder', 'partiu_comprar_passagens_p_ver_Leao_na_Libertadores']);
console.log(set);

//Aceita apenas objeto
let weakSet = new WeakSet([obj1, obj2]);
console.log(weakSet);
console.log(weakSet.has(obj1));
console.log(weakSet.has(obj2));

//add novo objeto
weakSet.add({type: 'obj3'});
console.log(weakSet);

//remover objeto no weakSet
weakSet.delete(obj2);
console.log(weakSet);