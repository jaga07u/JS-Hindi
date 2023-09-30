5//primitive
//7 types:Sting,Number,Boolean,null,undefined,symbol,BigInt

const score= 100;
const id=Symbol("123");
const Anotherid=Symbol("123");
console.log(id)
console.log( typeof Anotherid);
const bigNumber = 34565476654356754n;

//Reference(non Primitive)
//Array,,Objects,Functions

const heros=["shaktiman","naagtaj","doga"];
let  obj={
    name:"dulu",
    age:22,
}
const myFunction=function(){
    console.log("hello world");
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack(Primitive) , Heap(Non=Primitive)

let myName="Jagadish"
let anoterName="dulu"
console.log(anoterName);

let user={
    email:"user50@gmail.com",
    name:"jaga"
}
let user1=user;
user1.email="dulu04@gami.com"
console.log(user1);
console.log(user)