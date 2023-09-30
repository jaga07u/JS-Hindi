const userEmail = "h@hitesh.ai"
const UserEmail=[] //true

//if(userEmail){
//    console.log("Got user email");
//}
//else{
//    console.log("Don't have user email");
//}

//+++++Flasy values +++++++++++++++++++++
//false,0,-0, BigInt 0n,"",null,undefined,NaN

//+++++++++truthy values+++++++++++++
//"0" ,'false'," ",[],{},function(){}

//if(UserEmail.length ==0){
  //  console.log("Array is empty");
//}
//const emptyobj={}
//if(Object.keys(emptyobj).length ==0){
//    console.log("object is empty");
//}

//Nullish  Coalscing Operator (??): null undefined
 let val1;
 //val1=5 ?? 10 //output=5
// val1=null ?? 10 //output=10
// val1=undefined ?? 15 //O/P=15
val1=null ?? 10 ?? 15 //O/P=10
 console.log(val1);

 //Terniary Operator

// condition ? true :false
