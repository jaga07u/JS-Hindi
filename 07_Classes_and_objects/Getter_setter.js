class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
          return this._email.toUpperCase();
    }
    set email(e){
            this._email=e;
    }
    get password(){
        return    `${this._password}jaga`              //this._password.toUpperCase();
    }
    set password(val){
           this._password=val;
    }
}

const jaga= new User("jaga@gmail.com","abc")//new keyowrd also used for calling constructor function
console.log(jaga.password);
console.log(jaga.email);