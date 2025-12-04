//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
        //username is accessible here because of closure
    }
    // console.log(website); 
    //will give error because website is not defined in this scope

    two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
    //will give error because website is not defined in this scope
}

// console.log(username);
//will give error because username is not defined in this scope

// ++++++++++++++++++ Hoisting ++++++++++++++++++


//console.log(addone(5))
//addone can be called before its declaration because of hoisting
function addone(num){
    return num + 1
}



//addTwo(5)
//addTwo can not be called before its declaration because it is a function expression
const addTwo = function(num){
    return num + 2
}

//hoisting does not work with function expressions
//hoisting is a JavaScript mechanism where variable and function declarations 
//are moved to the top of their containing scope during the compile phase.