var obj1 = {
    a: 10,
    b: 20,
    cal: function () { return this.a * this.b; }
};
console.log(obj1.cal());
var obj2 = {
    a: 10,
    b: 20,
    cal: function () { return this.a - this.b; }
};
console.log(obj2.cal());
var myclass1 = /** @class */ (function () {
    function myclass1() {
        this.a = 0;
        this.b = 0;
    }
    myclass1.prototype.cal = function () {
        console.log(this.a + this.b);
        return this.a + this.b;
    };
    return myclass1;
}());
var obj3 = new myclass1();
obj3.a = 10;
obj3.b = 10;
obj3.cal();
