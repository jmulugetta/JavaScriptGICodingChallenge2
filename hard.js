// HARD: Given the information below for Tom and Jerry.
// ● Tom - height:  9in mass: 8 g
// ● Jerry - height: 10in mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean
// variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the
// console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

let massTom = ('8');
let heightTom = ('9');
let massJerry = ('45');
let heightJerry = ('10');

let tomBMI = heightTom / massTom **2
console.log(tomBMI);

let jerryBMI = heightJerry / massJerry **2
console.log(jerryBMI);

console.log(jerryBMI>tomBMI);
console.log(jerryBMI<tomBMI);

console.log(`Is Tom's BMI higher than Jerry'? ${tomBMI>jerryBMI}`)

if(jerryBMI > tomBMI){
    console.log("Is Tom's BMI higher than Jerry's? False")
}
else {
    console.log("Is Tom's BMI higher than Jerry's? True")
}