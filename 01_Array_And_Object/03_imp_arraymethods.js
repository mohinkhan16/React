

//Map

let Person=[
    {name :"kalpesh",age:21,city:"vadodra",profession:"Doctor"},
    {name :"Ankit",age:20,city:"Ahemdabad",profession:"Teacher"},
    {name :"Dharmik",age:19,city:"Baroda",profession:"Hair Stylest"},
    {name :"Prince",age:19,city:"Mumbai",profession:"Graphic desiner"},
    {name :"Mohin",age:21,city:"Pune  ",profession:"Bussiness men"},

];

const PersonName =Person.map((Person)=>{
    return Person.name;
})

console.log(PersonName);
//Filter
    
const people= Person.filter((x)=>x.age >20);

console.log(people);


//Reduce

const productDetails = [
  { productName: "Iphone", price: 1200,  stock: 15 },
  { productName: "Office Chair", price: 250,  stock: 30 },
  { productName: "Smartphone", price: 800,  stock: 25 },
  { productName: "Desk Lamp", price: 45,  stock: 50 },
  { productName: "Backpack", price: 60,  stock: 40 },
];


const total=productDetails.reduce((acc,cur)=>{
    return (acc=acc+cur.price);
},0);

console.log(total);


