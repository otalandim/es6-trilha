
//modo antigo es5
// function multiply(mult, arg1, arg2, arg3){
//     let array = [];
//     array.push(mult * arg1);
//     array.push(mult * arg2);
//     array.push(mult * arg3);
//     return array;
// }

//modo novo rest params - es6
function multiply(mult, ...args){
    return args.map(arg => arg * mult);
}

console.log(multiply(2,1,2,3,4,5,6));
