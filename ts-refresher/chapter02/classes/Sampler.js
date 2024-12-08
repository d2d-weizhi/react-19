var Sampler = /** @class */ (function () {
    function Sampler(message) {
        this.greeting = message;
    }
    Sampler.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Sampler;
}());
var sampler = new Sampler("world");
console.log(sampler.greet());
