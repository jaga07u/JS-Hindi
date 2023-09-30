
// let i=0;
// setInterval(function(){
//      console.log(i);
//      i++;
// },1000)
// console.log("hey i am jagadis");

// fetch("https://randomuser.me/api/")
// .then(function(reponse){
//     return reponse.json();
// })
// .then(function(data){
//     console.log(data.info.version);
// })
// .catch(function(error){
//     console.log("Something went wrong");
// })

// async function getAllUser(){
//     try{
//     const reponse= await fetch("https://randomuser.me/api/")
//     const data= await reponse.json();
//     console.log(data);
//     }catch(error){
//         console.log("Something went wrong");
//     }
// }
// getAllUser();
// const User={
//     name:"jagadish",
//     age:19,
//     loggedIn:true,
//     greeting:function(){
//         console.log(`welcome ${this.name}`);
//         console.log(this);
//     }
// }
// console.log(User.greeting());

function user(username,loggedIn,IsLoggedIn){
    this.username=username;
    this.loggedIn=loggedIn;
    this.IsLoggedIn=IsLoggedIn;
    return this;
}
const user1=new user("jagadish",12,true);
const user3= new user("dulu",14,true);
console.log(user1);
console.log(user3);