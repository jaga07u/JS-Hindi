const user={
    username:"jagadish",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}
//user.welcomeMessage()
//user.username="dulu"
//user.welcomeMessage();

//console.log(this);

//function chai() {
//    let username="dulu"
//    console.log(this.username);
//}
//chai()//undefined

const chai =  () =>{
    let username="dulu"
    console.log(this);
}
//chai();

//const addTwo=(num1,num2) =>{
//           return num1+num2//Explicitly
//}
//const addTwo=(num1,num2) =>  num1+num2
//const addTwo=(num1,num2) =>  (num1+num2)//implicitly 
const addTwo=(num1,num2) =>({username :"jagadish"})
console.log(addTwo(3,4));

//const myArray =[2,5,3,7,8]
//myArray.forEach()