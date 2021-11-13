//Reverse a number 
/*let s = -123;
let str = s.toString();
let newst = '';
for(let i = str.length-1; i>0; i--){
    newst = newst+str[i];
}
if(s < 0 ){
    newst = "-"+newst
}
console.log('>>>', newst)
*/



/*
//Show only last 4 digits of the CC
let cc = 123456789999;
//output = ********9999;
let strcc = cc.toString();
let newstcc = '';
for(let i=0; i < strcc.length; i++){
    if(i > strcc.length - 5){
        newstcc = newstcc+strcc[i];        
    } else {
        newstcc = newstcc+"*";
    }
}
console.log('>>>', newstcc)
*/



/*
// Get sum through javascript clouser 
const getSum = (a) => (b)=> (c) => (d) => (e) => a+b+c+d+e;
console.log(getSum(5)(4)(3)(2)(5));
*/

/*
let arr = [1,2,3,4,5];
// console.log(arr.map(a=> a + 1).filter(x => x > 2))
let avg = arr.reduce((accum, current) => {
    // debugger;
    return accum+current/arr.length;
})
console.log(avg)
*/
// Closure in action that is inner function can have access to the outer function variables/parameters as well as all the global variables.
// The return statement does it execute the inner function -  function is executed only when followed by (), but rather the return statment returns the entire body of the function.
//var k = 7;
// function a(i){
//     var j = 5;
//     function b(){
//         console.log('i: ', i+j+k)
//     }
//     return b()
// }

// a(2)
/*
function b(){
    // var k = 9;
    console.log('k: ', k)
    var k = 55
    console.log('k: ', k)
}
return b();

*/


// Max heap: where the parent node is greater than the child node. except root node.
// To check the parent of any node [size/2]
// arr[i]>= arr[i+1] && arr[0] > arr[i+1]
