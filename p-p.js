// const fe=fetch('https://api.github.com/users/hiteshchoudhary')
// fe.then(function(response){
//     return response.json();
// }).then(function(data){
//     console.log(data.bio);
// }).catch(function(error){
//     console.log(error);
// })

// async function getAllUser(){
//     try{
//     const response= await fetch('https://api.github.com/users/hiteshchoudhary');
//    // console.log(response);
//     const data= await response.json();
//     console.log(data);
//     }
//     catch(error){
//         console.log("Something went wrong");
//     }

// }
// getAllUser();

// const promiseOne=new Promise(function(reslove,reject){
//     setTimeout(function(){
//         reslove()
//     },1000)
// })

// promiseOne.then(function(){
       
// }).then(function(data){
//     console.log(data);
// }).catch(function(){
//     console.log("rejected");
// })

// fetch('https://randomuser.me/api/')
// .then(function(response){
//    // console.log(response);
//     return  response.json();
// })
// .then(function(data){
//     //console.log(data);
//     console.log(data.info.seed);
// }).catch(function(error){
//     console.log("Someting went wrong");
// })
// function compare()
// {
//     let num=2;
//     let b=2;
//     if(a==b)
//         return true;
//     else
//         return false;
// }
// console.log(compare());
// var scope = "js scope";
// function checkscope() 
// {
//     var scope = "javascript scope"; 
//     function f() 
//     { 
//          return scope; 
//     }
//     return f;
// }
// console.log(checkscope()());
let a=0;
for(a;a<5;a++);
console.log(a);