// var http = require('http');
// http.createServer(function(req, res){

// res.writeHead(200, {'Content-Type': 'test/plain'})
// res.end('Hi there, Again new application from http server!')
// }).listen(8080, '127.0.0.1')


/*
function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }

let arr1 = [2, 6, 3, 7];
let arr2 = [8, 6, 5, 3];

//Sum is nearest 12
var finalSum = 12;
let arr = [];
for (let index = 0; index < arr1.length; index++) {
    const element1 = arr1[index];

    for (let index2 = 0; index2 < arr2.length; index2++) {
        const element2 = arr2[index2];
        sum = (element1 + element2);
        arr.push(element1 + element2);
        if(sum > finalSum){
            
        }
    }

}

console.log(bubbleSort(arr));
*/
/*
let arr = [2,3,4,5,6,7,0,1]
// find how many times it got left shifted means if array was [0,1,2,3,4,5,6,7] and become [4,5,6,7,0,1,2,3] then it got left shifted 4 times
let size = arr.length;
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(arr[index] > arr[index+1]){
        console.log("array left shifted :", size - index-1 + 'times')
        break;
    }
}

*/
let item = 20;
let itemIndex;
    //     0  1  2  3  4  5  6   7   8   9   10  11   12   13   14   15
let arr = [2, 3, 4, 5, 6, 7, 12, 13, 17, 20, 23, 25, 171, 201, 231, 251]
let l = 0;
let r = arr.length - 1;
while (l <= r) {
    let mid = parseInt((l + r) / 2);
    console.log('l:', l, 'mid: ', mid, 'r: ', r )
    if (item == arr[mid]) {
      itemIndex = mid; 
      break;
    } else if (item < arr[mid]) {
        r = mid - 1;
    } else {
        l = mid + 1;
    }
}
console.log("The Search Item", item,  " is at ", itemIndex, ' index.')



