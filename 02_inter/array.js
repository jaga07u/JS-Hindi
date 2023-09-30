//array

const myArray= [0,1,2,3,4,5]
const myHero=["shaktiman","naagraj"]
const newArray=new Array()
//console.log(myArray[0]);

//Array methods
//myArray.push(6)
//myArray.push(7)
//myArray.pop()
//console.log(myArray.includes(1));
//console.log(myArray.indexOf(3));
myArray.unshift(-1)
myArray.shift()
const newarrya=myArray.join();
console.log(myArray);
console.log(newarrya);

//slice, splice

console.log("A",myArray);
const myn1= myArray.slice(1,3);
console.log(myn1);
console.log("B",myArray);
const myn2=myArray.splice(1,3)
console.log("C",myArray)
console.log(myn2);
