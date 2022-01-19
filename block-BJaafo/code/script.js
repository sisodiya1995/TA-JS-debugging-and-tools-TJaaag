// 1

function getfullName(firstName , lastName) {

return `${firstName} ${lastName} `

}

let result = getfullName("Akash" ,"Singh");
let expected = "Akash"

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}

let expected = "Akash Singh"
if(result === expected){
    throw new Error(`${result} is  equal to ${expected}`);
}

// 2
function getTotal(amount , taxRate){
  let total = amount + amount * taxRate ;
  return total
}

let result = getTotal(10000 ,10);
let expected = 15000;

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}