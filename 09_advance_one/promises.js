const promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Promise 1');
        resolve();
    }, 1000);
})
 
promise1.then(function(){
    console.log('Promise 1 resolved');
});
//..............................................

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Promise 2');
        resolve();
    }, 1000);
})
.then(function(){
    console.log('Promise 2 resolved');
});
//..............................................

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: 'John', age: 30});
    }, 1000);

});

promise3.then(function(data){
    console.log(data);
});
//..............................................

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({name: 'John', age: 30});
        }
        else{
            reject('Error');
        }
    }, 1000);
});

promise4.then(function(data){
    console.log(data);
    return data.name;
})
.then(function(name){
    console.log(name);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log('Finally');
});
//..............................................

const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({name: 'js', password: 'js123'});
        }
        else{
            reject('Error');
        }
    }, 1000);
});

async function consumepromice5(){
    try{
        const data = await promise5;
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()
//..............................................

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.