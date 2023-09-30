
function sayMyName(){
    console.log("d");
    console.log("u");
    console.log("l");
    console.log("u");
}
//sayMyName()

//function addTwoNumber(num1,num2){
  //  console.log(num1+num2)
//}
//function addTwoNumber(num1,num2){
  //  //let result=num1+num2
    //return num1+num2;
//}
function loginUserMessage(username){
    if(username === undefined){ /*or (!username)*/
        console.log("please enter a username")
        return 
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("dulu"))
//console.log(loginUserMessage())//return "undefined just logged in"
//const result=addTwoNumber(3,4);
//console.log("result:",result);

function calculateCardPrice(val1,val2,...num1){
     return num1
}
(calculateCardPrice(200,400,500,2000));

const user={
    name:"dulu",
    price:199,
}
//function handleObject(anyObject){
//    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
//}
//handleObject(user);
//handleObject({
 //   username:"Sam",
 //   price:399
//})
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1];
}
//console.log(returnSecondValue(myNewArray));