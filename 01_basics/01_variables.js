const accountId = 144553
let accountEmail = "sms@google.com"
var accountPassword = "12345678"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ss@ss.com"
accountPassword = "2121212"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])