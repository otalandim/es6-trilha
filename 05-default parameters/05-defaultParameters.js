
function hello(nome='Otávio', sobrenome='Landim'){
    console.log(`Hello ${nome} ${sobrenome}!`);
}

hello(); //exibe o default parameter 

hello('Francisco','Conrado'); //sobrescreve os dois parametros default passando na function

hello('Francisco'); //sobrescreve apenas um parametro default