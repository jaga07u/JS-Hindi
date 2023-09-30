// let myName="jagadish     ";
// let myChannel="Chai    "
// console.log(myName.truelength());

let myHeros=["thor","spiderman"];

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderpower:function(){
        console.log(`spiddy power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh=function(){
    console.log(`hitesh says hello`);
}
//myHeros.hitesh()
//myHeros.heyHitesh();
//heroPower.heyHiteshhitesh();

//inheritance

const user={
    name:"chai",
    email:"chai@google.com"
}
const Teacher={
    makevideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssingment:'JS assingment',
    fullTime:true,
    __proto__:TeachingSupport
}
//console.log(TASupport);
//console.log(Teacher.__proto__= user);
//console.log(TASupport.__proto__);

//modern sytax
Object.setPrototypeOf(TeachingSupport,user);


// let anotherUsername="chaiAurCode    ";
// let mystr="jagadish     "
// String.prototype.trueLength=function(){
//     console.log(`truleng this ${this.trim().length}`);
// }
// "jaga".trueLength();
// mystr.trueLength();
// anotherUsername.trueLength();
