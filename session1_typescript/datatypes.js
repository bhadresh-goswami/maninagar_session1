var dataTypes = /** @class */ (function () {
    function dataTypes() {
    }
    dataTypes.numberMethod = function (n1) {
        var n = 10;
        if (n1 != undefined) {
            n = n1;
        }
        console.log("the value of n is " + n + "!");
    };
    dataTypes.showdata = function (name, age) {
        if (name == undefined && age == undefined) {
            console.log("Invalid details!");
        }
        else {
            console.log("name is " + (name == undefined ? 'not defined' : name));
            console.log("age is " + (age == undefined ? 'not defined' : age));
        }
    };
    return dataTypes;
}());
dataTypes.numberMethod();
dataTypes.numberMethod(1);
dataTypes.showdata();
dataTypes.showdata("bhadresh");
dataTypes.showdata(undefined, 12);
dataTypes.showdata("bhadresh", 30);
