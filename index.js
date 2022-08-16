var NormalUser = /** @class */ (function () {
    function NormalUser(name, password) {
        this.name = name;
        this.password = password;
    }
    return NormalUser;
}());
function sayHello(u) {
    console.log("Hello, " + u.name);
}
sayHello(new NormalUser("karim", "123"));
//# sourceMappingURL=index.js.map