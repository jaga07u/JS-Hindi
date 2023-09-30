const discripter=Object.getOwnPropertyDescriptor(Math,"PI")
//
//console.log(discripter);

// console.log(Math.PI);
// Math.PI=5.44;
// console.log(Math.PI);


const munew=Object.create(null);
const chai={
    name:"ginger",
    price:250,
    isAvaliable:true,
    orderChai : function(){
        console.log("chai nahi bani");
    }
}
//console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    //writable:false,
    enumerable:false,
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
    console.log(`${key}:${value}`);
    }
}