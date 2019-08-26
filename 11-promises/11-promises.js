// Promise usada para requisicoes assincronas

var obj = {
    nome: 'Otávio',
    idade: 32
};
var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve(obj);
        } else {
            reject('Error!');
        }
    }, 3000);
});

promise
    .then((data) => console.log(data))
    .catch((err) => console.log(err));