 const promiseOne= new Promise(function(reslove,reject){
    // Do an async task
    //DB calls,cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        reslove()
    },1000)
});

promiseOne.then(function(){
    console.log("Promise consumed");
}) //"consume" directly  connection resolve


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolve");
})


const promeiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
            resolve({username:"chai",email:"chai@example"})
    },1000)
})


promeiseThree.then(function(user){
            console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"dulu",password:"1234"})
        }
        else{
            reject('ERROR Somwthing went wrong')
        }
    },1000)
})
promiseFour
.then((user) =>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=>{console.log("The promise resolve or rejected");})


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Javascript",password:"1234"})
        }
        else{
            reject('ERROR JS went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    
 try {
    const response=await promiseFive
    console.log(response);
 } catch (error) {
    console.log(error);
 }
}
consumePromiseFive();


// async function getAllUser(){
//   try {
//     const response=await fetch('https://jsonplaceholder.typicode.com/users');
//     //console.log(response);
//     const data= await response.json();
//      console.log(data);
//   } catch (error) {
//     console.log("E:",error);
//   }
// }
// getAllUser();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
 console.log(data);
})
.catch((error)=>{
    console.log(error);
})