// Global Scope
var globalVar = "I am a global variable";
let globalLet = "I am also a global, but second with let";
const globalConst = "I am a global constant";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

{
    // Block Scope
    var blockVar = "I am a block variable";
    let blockLet = "I am also block, but second with let";
    const blockConst = "I am a block constant";
}

//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "I am a block variable";
    let functionLet = "I am also block, but second with let";
    const functionConst = "I am a block constant";
}
show();

console.log(functionVar);
console.log(functionLet);
console.log(functionConst);

