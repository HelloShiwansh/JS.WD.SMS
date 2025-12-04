// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')


// IIFE is a function that runs as soon as it is defined
// It is used to create a private scope, avoiding polluting the global scope
