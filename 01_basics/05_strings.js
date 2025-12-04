const name = "Shiwansh ";
const surname = "Singh";

console.log(name + surname + "is my name.");

console.log(`My name is ${name} & surname is ${surname}`);

const userEmail = new String('www.sms@gmail.com');
console.log(userEmail);
console.log(userEmail[1]);
console.log(userEmail.__proto__);

console.log(userEmail.toUpperCase());
console.log(userEmail.charAt(2));
console.log(userEmail.indexOf('@'));

const newString = userEmail.substring(0, 4)
console.log(newString);

const anotherString = userEmail.slice(-2, 4)
console.log(anotherString);

const newStringOne = "   sms    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(userEmail.split('.'));