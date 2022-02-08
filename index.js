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

