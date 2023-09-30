// singleton

//Object.create()//constructor trough=>Create single ton
//objects literals
const mysym=Symbol("key1")
const jsUser={ 
    name:"jagadish",
    "full name":"Jagadis pradhan",
    age:19,
    [mysym]:"mykey1",
    location:"odisha",
    email:"dulu04pradhan@gmai.com",
    isloggedIn:false,
    lastLoginDays:["Monday","saturday"]
}
//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["full name"]);
//console.log(typeof jsUser[mysym]);

jsUser.email="pradhan02jagadish@gmai.com";
//Object.freeze(jsUser)
jsUser.email="pradhan02dulu@gmai.com";
//console.log(jsUser);

jsUser.greeting=function(){
   // console.log("Hello JS user");
}
jsUser.greeting2=function(){
  //  console.log(`Hello JS user,${this.name}`);
}
//console.log(jsUser.greeting());
//console.log(jsUser.greeting2());
console.log(jsUserObject.keys(jsUser));
