
// let frontend = ['React', 'Vue', 'Angular'];
// let backend = ['Python', 'Ruby', 'Node'];

//modo antigo
// let fullStack = frontend.concat(backend);
// console.log(fullStack);

//modo spread operator adicionando uma string entre os dois arrays desmenbrados
// let fullStack = [...frontend, 'RxJS', ...backend];
// console.log(fullStack);

// console.log([...'otávio']);

// spread operator dentro de funcoes

function makeSandwich(bread, cheese, sauce){
    console.log(`your sandwich with ${bread} bread, ${cheese} cheese and ${sauce} is done!`);
}

const ingredients = ['white','cheedar','barbecue'];
makeSandwich(...ingredients);
