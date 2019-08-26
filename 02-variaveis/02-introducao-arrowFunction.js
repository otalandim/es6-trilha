const cidades = ['São Paulo', 'Gramado', 'Curitiba'];

const novasCidades = cidades.map(function(cidade){
    return `Cidades: ${cidade}`
}); 

// console.log(novasCidades);

//arrow function
const novasCidadesArrow = cidades.map((cidade) => {
    return `Cidades: ${cidade}`
}); 

// console.log(novasCidades);

//arrow function single
const novasCidadesArrowSingle = cidades.map(cidade => {
    return `Cidades: ${cidade}`
}); 

//arrow function oneline
const novasCidadesArrowOneLine = cidades.map(cidade => `Cidades: ${cidade}`); 


const cidadesChain = cidades
                        .filter(cidade => cidade === 'Gramado')
                        .map(cidade => `Cidades: ${cidade}`); 

console.log(cidadesChain);
