// Basic calculation app.

function add (a,b){
    console.log("addition =", a+b);
}
function sub (a,b){
    console.log("substraction =", a-b);
}
function mul (a,b){
    console.log("multiplication =", a*b);
}
function div (a,b){
    console.log("division =", a/b);
}

// add(5,4);
// sub(5,4);
// mul(5,4);
// div(5,4);

module.exports = {
    addition : add,
    substraction : sub,
    multiplication : mul,
    division : div
}