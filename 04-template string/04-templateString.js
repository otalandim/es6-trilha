
const endereco = {
    rua: 'Benjamin Barroso',
    bairro: 'Monte Castelo'
};

const textoParaImprimir = 'Eu moro na ' + endereco.rua + ' que fica no bairro ' + endereco.bairro;
const novoTextoParaImprimir = `Eu moro na ${endereco.rua} que fica no bairro ${endereco.bairro}`;

console.log(textoParaImprimir);
console.log(novoTextoParaImprimir);
