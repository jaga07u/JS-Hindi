// const tinderUser=new Object()
const tinderUser={};
 tinderUser.id= "123abc"
 tinderUser.name="sam"
 tinderUser.isLoggedIn=false
 //console.log(tinderUser);
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
        firstname:"jagadish",
        lastname:"choudhary"
    }
   }
}
//console.log(regularUser.fullname.userfullname.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3={...obj1,...obj2};
//const obj3=Object.assign({},obj1,obj2,obj4)
//console.log(obj3);
const users=[{
    id:1,
    email:"h@gmail.com"
},
{
    id:2,
    email:"j@gmail.com"
},
{
    id:3,
    email:"k@gmail.com"
}]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));
const course={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"dulu"
}
//course.courseInstructor
const {courseInstructor:instructor}=course;//object de-structuring
console.log(instructor);

//JSON
/*{
    "name":"dulu",
    "coursename":"js in hindi",
    "price":"free"
}*/

[
    {},
    {},
    {}
]