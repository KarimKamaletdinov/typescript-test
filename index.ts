interface User{
    name: string;
    password: string;
}

class NormalUser implements User{
    name: string;
    password: string;

    constructor(name: string, password: string){
        this.name = name;
        this.password = password;
    }
}

function sayHello(u: User){
    console.log("Hello, " + u.name);
}

sayHello(new NormalUser("karim", "123"));