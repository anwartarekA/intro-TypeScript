// annotation || signature
//annotation variables

let myname:String = 'anwar';
//myname=10 --> error
console.log(myname);

// with multi data type
let chose:(string|Number|boolean) = 'anwar';
chose = 10;
chose = true;
console.log(chose);

// variables with any data type

let randomChose ;  // equal to let randomchose : any;
randomChose = 'kareem';
randomChose = 20;
console.log(randomChose);

// with arrays 

let myarray:string[] = ['anwar','kareem','belal','tarek'];
for(let i=0; i<myarray.length; i++)
{
    // myarray[i].repeat()
    console.log(myarray[i].repeat(3));
}

// with multidimentional arrays 
let array:(string|Number|boolean[])[] = ['A','B','C','D',1,2,3,10,[true,false]];
console.log(array);

// with functions 
function add (n1:string,n2:number)
{
    return n1 + n2
}
console.log(add('10',10));

function Details (name:string , age:number , salary:number):string
{ let variable =10;
if(variable == 10)
{
     return `my name is ${name} and my age = ${age} and salary:${salary} the additional variable:${variable}`
}
else
{
   return 'no Details found !';
    
}
}

console.log(Details('anwar',21,5000));

// some features in function 
// function myDetails(name:string,age:number,city:string='Alex')
// {
//     return `my name is ${name} and my age = ${age} and my country is : ${city}`
// }
// console.log(myDetails('anwar',21));


function myDetails(name:string,age:number,city?:string)
{
    return `my name is ${name} and my age = ${age} and my country is : ${city}`
}
console.log(myDetails('anwar',21));

// rest parameter 

function sumNums (...nums:number[]):number
{
   let sum = 0;
    nums.forEach( ele => sum+=ele);
    return sum;
}
console.log(sumNums(10,20,40,50,50,+true));



 
