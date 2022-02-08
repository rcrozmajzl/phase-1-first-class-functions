function receivesAFunction(callback) {
    callback();
}


function returnsANamedFunction() {
    function namedFunction() {
        console.log("anything");
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return (function (){
        console.log("I'm an anonymous function");
    })
    
}


// - The `returnsAnAnonymousFunction` function should:
// - take no arguments
// - return an _anonymous function_

