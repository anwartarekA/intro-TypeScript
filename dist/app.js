"use strict";
let myname = 'anwar';
console.log(myname);
let chose = 'anwar';
chose = 10;
chose = true;
console.log(chose);
let randomChose;
randomChose = 'kareem';
randomChose = 20;
console.log(randomChose);
let myarray = ['anwar', 'kareem', 'belal', 'tarek'];
for (let i = 0; i < myarray.length; i++) {
    console.log(myarray[i].repeat(3));
}
let array = ['A', 'B', 'C', 'D', 1, 2, 3, 10, [true, false]];
console.log(array);
function add(n1, n2) {
    return n1 + n2;
}
console.log(add('10', 10));
function Details(name, age, salary) {
    let variable = 10;
    if (variable == 10) {
        return `my name is ${name} and my age = ${age} and salary:${salary} the additional variable:${variable}`;
    }
    else {
        return 'no Details found !';
    }
}
console.log(Details('anwar', 21, 5000));
function myDetails(name, age, city) {
    return `my name is ${name} and my age = ${age} and my country is : ${city}`;
}
console.log(myDetails('anwar', 21));
function sumNums(...nums) {
    let sum = 0;
    nums.forEach(ele => sum += ele);
    return sum;
}
console.log(sumNums(10, 20, 40, 50, 50, +true));
