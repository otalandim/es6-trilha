// var $bt = document.querySelector('#btn');

// $bt.addEventListener('click', function (event) {
//     (() => {
//         console.log('clicou no button', this);
//     })();
// }, false);


var obj = {
    prop: 100,

    obj2: {
        outroNome: 'Bruno JS',
        someMethod: () => this.outroNome
    }
};

console.log(obj.obj2.someMethod());
