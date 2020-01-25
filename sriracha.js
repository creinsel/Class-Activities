

// var a=(process.argv[2]);
// var b=(process.argv[3]);

function equalOrNah(a,b){
if(a===b){
    console.log(a+ " "+ b+ " " +"are equal")
}
else{
    console.log(a, b)
}
};
console.log(equalOrNah(process.argv[2], process.argv[3]))