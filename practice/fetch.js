// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//    // console.log(data)
//    let myArr=new Array();
//     for(let i=0;i<data.length;i++){
//         myArr.push(data[i].address)
//     }
//     console.log(myArr);
// })
// .catch(function(error){
//     console.log("OPPs something went wrong");
// })

// async function  getALlUsers(){
//     try{
//         const fe=await fetch("https://jsonplaceholder.typicode.com/users");
//         const data= await fe.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log("something went wrong");
//     }
// }
// getALlUsers();

// async function set(){
//      setTimeout(function(){
//         console.log("Hii i am jagasih");
//     },2000);
//     await function hi(){
//         console.log("hii");
//     }
// }
// set()

// function delay(ms) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve();
//       }, ms);
//     });
//   }
  
//   async function main() {
//     console.log("Before setTimeout");
//     await delay(2000); // Wait for 2 seconds
//     console.log("After setTimeout");
//   }


  function delay(ms){
       return new Promise((resolve)=>{
        setTimeout(function(){
            resolve()
        },ms)
       })
  }

  async function main(){
    console.log("Before setTimeOut");
          await delay(2000);
    console.log("After SetTimeout");
  }
  main();
//   main();

// function fetchData() {
//     return new Promise((resolve, reject) => {
//       // Simulate an asynchronous operation (e.g., fetching data)
//       setTimeout(() => {
//         const fe=fetch("https://jsonplaceholder.typicode.com/users");
//         const data =JSON.parse(fe);
//         // Resolve the Promise with the data
//         resolve(data);
//         // Or reject it with an error
//         // reject(new Error("Failed to fetch data"));
//       }, 2000); // Simulated delay of 2 seconds
//     });
//   }
  
//   // Using the Promise
//   fetchData()
//     .then(data => {
//       console.log("Data:", data);
//     })
//     .catch(error => {
//       console.error("Error:", error);
//     });