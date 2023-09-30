const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        //console.log("Got user details from database");
        //console.log(this.username);
        console.log(this);
    }
}

//const promiseOne=new Promise()
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);


function User(username,loginCount,IsLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.IsLoggedIn=IsLoggedIn;
    this.greeting=function(){
        console.log(`welcome${this.username}`);
    }
    //return this;
}

const userOne= new User("jagadish",12,true);

const user2= new User("ChaiAUrcode",11,true)

console.log(userOne.constructor);
//console.log(user2);
