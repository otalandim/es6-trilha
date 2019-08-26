//Set eh um objeto que permite guardar valores unico de um tipo, seja ele um tipo primitivo ou objeto

let set = new Set(['líder', 'segue_o_líder', 'partiu_comprar_passagens_p_ver_Leao_na_Libertadores']);

/// tamanho do objeto set e nao eh length
//console.log(set.size);

//adiciona um novo elemento
set.add('blablabl');
console.log(set);

///para remover apenas 1 elemento
set.delete('blablabl');
console.log(set);

//has pra saber se exists um elemento la no objeto
console.log(set.has('líder'));

let names = set.values();

for(name of names){
    console.log(name);
}