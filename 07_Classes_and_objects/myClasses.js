//ES6


// class User{
//     constructor(usermane,email,password){
//         this.usermane=usermane;
//         this.email=email;
//         this.password=password;
//     }
//     encryptPassword(){
//           return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.usermane.toUpperCase()}`
//     }
// }
// const chai=new User("chai","chai@gmail.com","123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());



function User(usermane,email,password){
      this.usermane=usermane;
      this.email=email;
      this.password=password
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

const tea=new User("tea","tea@gamil.com","123");
console.log(tea.encryptPassword());