//generator
// function* genNames(){
//     yield 'Otávio';
//     yield 'Isaac';
//     yield 'Landim';
// }

// const names = genNames();

// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());

//generator ajax
function ajax(url){
    fetch(url)
        .then(data => data.json())
        .then(data => dados.next(data));
}

function* ajaxGen(){
    console.log('Buscando posts...');
    const b = yield ajax('https://willianjusten.com.br/search.json');
    console.log(b);
    
    console.log('Buscando dados do github...');
    const c = yield ajax('https://api.github.com/users/otaviolandim');
    console.log(c);
}

const dados = ajaxGen();
dados.next();
