class dataTypes{
    public static numberMethod(n1?:number):void{
        var n:number = 10;
        
        if (n1!=undefined){
                n = n1;
        }
        console.log(`the value of n is ${n}!`);

    }
    public static showdata(name?:string, age?:number){

        if(name==undefined && age==undefined)
        {
            console.log("Invalid details!");
        }
        else{
            console.log(`name is ${name==undefined?'not defined':name}`);
            console.log(`age is ${age==undefined?'not defined':age}`);
        }

    }
    // public static numberMethod(n1:number):void{
        
    //     var n:number = n1;

    //     console.log(`the value of n is ${n}!`);
    // }
}

dataTypes.numberMethod();
dataTypes.numberMethod(1);

dataTypes.showdata();
dataTypes.showdata("bhadresh");
dataTypes.showdata(undefined,12);
dataTypes.showdata("bhadresh",30);