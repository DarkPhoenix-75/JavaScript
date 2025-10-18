class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username:${this.username}`);   
    }

    static createId(){
        return `123`
    }
}

const Sameer= new User("Sameer")
// console.log(Sameer.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email

    }
}

const iphone=new Teacher("iphone","i@phone.com")
// iphone.logMe()

//Can't do because of static keyword
// console.log(iphone.createId());

