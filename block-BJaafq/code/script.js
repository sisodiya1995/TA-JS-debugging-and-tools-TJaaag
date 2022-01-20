// addTwoNumber
// Testing framework
function test(message , callback){
try{
    callback();
    console.log("✅" ,message);
}catch(error){
    console.error(error);
  console.log("❎",message);
}

}
 

function expect(actual){

    return {

        isEqual : function (expected){
               if(actual !== expected){
                throw new Error (`${result} is not equal to ${expected}`);
               }
        }
    }
}

 function add(a,b){
   return a + b;
 }
function testAdd() {
    result = add(2,4);
    expected = 5;
    expect(result).isEqual(expected);
  /*  if(result !== expected){
         throw new Error (`${result} is not equal to ${expected}`)
    }  */
} 

test("adding 2 and 4" ,testAdd);

function substract(a, b){
  return a - b;
}

function testSub() {
    result = substract(4,2);
    expected = 2;
    expect(result).isEqual(expected);
  /*  if(result !== expected){
         throw new Error (`${result} is not equal to ${expected}`)
    }  */
}
test("substract 4 and 2" ,testSub);