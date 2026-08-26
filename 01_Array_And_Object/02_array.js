
//push
let details =["id","number","mail","photos"];
details.push("address");
console.log(details);

//unshift
let veges = ["poteto","tomoto","chill","carrot"];
veges.unshift("chill")
console.log(veges);

//pop

let fruites =["banana","mango","cherry"];
fruites.pop();
console.log(fruites);

//shift

let bike = ["e-bike","splender","ktm"];
bike.shift();
console.log(bike);

//join

let fru = ["mango","banana","oranges","cherry"];
console.log(fru.join());
console.log(fru.join(" "));

//flat

let numbers =[1,2,3,4,5,6,[7,8,9],10];
console.log(numbers.flat());


let numbers2 =[1,2,3,[4,5,6,[7,8,9],10]];
console.log(numbers2.flat(3));
 
let numbers3 = [1,2,3,[4,5,[6,7,[8,9,[10]]]]]
console.log(numbers3.flat(Infinity));

//slice

let details1=["id","aadaharcard","address","photo"];
console.log(details1.slice(0,2));

//some

let number =[1,2,3,4,5,6,7,8,9,10];
const result = number.some((x)=>{
    return x>10;    
})

console.log(result);


//reverse
console.log(number.reverse());

//find

let number1 =[1,2,3,4,5,6,7,8,9];
let result1 = number.find((x)=>x>6);
console.log(result1);


//every

console.log(number1.every((x)=>x>5));

//sort

let alphabet = ["a","c","b","e","d"];
console.log(alphabet.sort());

