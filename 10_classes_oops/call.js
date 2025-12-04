function setName(name){
    this.name = name;
}

function newUser(name, id, email) {
    //setName(name); 
    // // this would not set the name as this would refer to the global object 
    // and as soon as its removed from the stack we would loose the name
    setName.call(this, name); // this would set the name on the new object
    this.id = id;
    this.email = email;
}

let user1 = new newUser('sms', 127, 'sms@mail.com');
console.log(user1); 



//note:
// 1. `this` refers to the object calling the function or the context in which it's used.
// 2. In a constructor function (`new` keyword), `this` refers to the new object being created.
// 3. `call()` allows calling a function with a specified `this` value.
// 4. `setName.call(this, name);` ensures `setName` sets `name` on the new object created by `newUser`.
// 5. `call()` is useful for function reuse, avoiding code duplication.
// 6. Without `call()`, `setName` would set `name` on the global object (or `undefined` in strict mode).
// 7. `new newUser('sms', 127, 'sms@mail.com');` creates a new object and sets properties.
// 8. The output is an object with `name`, `id`, and `email` properties.
// 9. `call()` is often used for method borrowing between objects.
// 10. `apply()` works like `call()`, but takes arguments as an array.

