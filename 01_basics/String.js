const name="dulu"
const repoCount= 50
//console.log(name + repoCount + "value");
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName=new String("dulu");
//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);//8
//console.log(gameName.toUpperCase())   //DULU
//console.log(gameName.charAt(2))       //l
//console.log(gameName.indexOf("l"))    //2
const newString = gameName.substring(0,4)//we can not give negative value
//console.log(newString);
//const anoterhString = gameName.slice(0,4)
//const anoterhString = gameName.slice(-8,3)
//console.log(anoterhString);
const str="   dulu    "
//console.log(str);
//console.log(str.trim())
const url="https://dulu.com/dulu04pradhan"
//url.replace('04',"2004");
//console.log(url.replace('04',"2004"));
//console.log(url.includes('04'))
//spit()
//************************************************************** */
///const areEqualInUpperCase = (str1, str2) =>
 // str1.toUpperCase() === str2.toUpperCase();
//const areEqualInLowerCase = (str1, str2) =>
  //str1.toLowerCase() === str2.toLowerCase();

//console.log(areEqualInUpperCase("ß", "ss")); // true; should be false
//console.log(areEqualInLowerCase("ı", "I")); // false; should be true

/****************************************************** */
//const strPrim = "foo"; // A literal is a string primitive
//const strPrim2 = String(1); // Coerced into the string primitive "1"
//const strPrim3 = String(true); // Coerced into the string primitive "true"
//const strObj = new String(strPrim); // String with new returns a string wrapper object.

//console.log(typeof strPrim); // "string"
//console.log(typeof strPrim2); // "string"
//console.log(typeof strPrim3); // "string"
//console.log(typeof strObj); // "object"
//const s2 = new String("2 + 2"); // creates a String object
//console.log(s2);
//console.log(eval(s2.valueOf())); // returns the number 4

const worldString = "Hello, world";
console.log(worldString.blink()); // <blink>Hello, world</blink>
console.log(worldString.bold()); // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike()); // <strike>Hello, world</strike>
console.log(worldString.fixed()); // "<tt>Hello, world</tt>"