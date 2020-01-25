function add(a,b){
     console.log(a+b);
}

function subtract(a,b){
    console.log(a-b);
}

function multiply(a,b){
     console.log(a*b);
}

function divide(a,b){
    console.log(a/b);
}

function remainder(a,b){
     console.log(a%b);
}

function exp(a,b){
    console.log(Math.pow(a,b));
}

function runCalc(operation, a, b){
    if(operation==="add"){
        add(parseInt(a),parseInt(b))
    }
    if(operation==="subtract"){
        subtract(parseInt(a),parseInt(b))
    }
    if(operation==="multiply"){
        multiply(parseInt(a),parseInt(b))
    }
    if(operation==="divide"){
        divide(parseInt(a),parseInt(b))
    }
    if(operation==="remainder"){
        remainder(parseInt(a),parseInt(b))
    }
    if(operation==="exp"){
        exp(parseInt(a),parseInt(b))
    }


};

console.log(runCalc(process.argv[2],process.argv[3], process.argv[4]))