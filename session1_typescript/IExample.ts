interface Imycal{
    a:number;
    b:number;

    cal():number;
}



var obj1:Imycal = {
    a:10,
    b:20,
    cal():number
    { return this.a*this.b;}
}

console.log(obj1.cal());


var obj2:Imycal = {
    a:10,
    b:20,
    cal():number
    { return this.a - this.b;}
}

console.log(obj2.cal());


class myclass1 implements Imycal{
    constructor(){

    }
    a: number = 0;     
    b: number = 0;
    cal(): number {
        console.log(this.a+this.b);
        return this.a + this.b;
    }


}
var obj3 =new myclass1();
obj3.a = 10;
obj3.b = 10;
obj3.cal();