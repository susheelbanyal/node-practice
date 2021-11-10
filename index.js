const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'number',
    message: "Please enter number for programmmes?"
  }
]

console.log('1 : Bubble Sort');
console.log('2 : Binary Search');
console.log('3 : Palindrome');
console.log('4 : Check for how many time array left shifted');

inquirer.prompt(questions).then(answers => {
  console.log(typeof(answers['number']),`You have pressed ${answers['number']}!`)
  switch(parseInt(answers['number'])){
  case 4:      //if day = 1
    // find how many times it got left shifted means if array was [0,1,2,3,4,5,6,7] and become [4,5,6,7,0,1,2,3] then it got left shifted 4 times
    let arr = [2,3,4,5,6,7,0,1]
    let size = arr.length;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(arr[index] > arr[index+1]){
            console.log(arr, " array left shifted :", size - index-1 + ' times')
            break;
        }
    }
    break;
  case 2: 
    // Binary search
    let item = 20;
    let itemIndex;
        //     0  1  2  3  4  5  6   7   8   9   10  11   12   13   14   15
    let binaryArr = [2, 3, 4, 5, 6, 7, 12, 13, 17, 20, 23, 25, 171, 201, 231, 251]
    let l = 0;
    let r = binaryArr.length - 1;
    while (l <= r) {
        let mid = parseInt((l + r) / 2);
        //console.log('l:', l, 'mid: ', mid, 'r: ', r )
        if (item == binaryArr[mid]) {
          itemIndex = mid; 
          break;
        } else if (item < binaryArr[mid]) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    console.log("The Search Item", item,  " is at ", itemIndex, ' position in '+ binaryArr );
    break;
  case 3: 

    let number = 1234321;
    function isPalindrome(str, duplNew) {
        if (typeof str === 'string') {
            let length = str.length;
            let newStr = '';
            for (i = length - 1; i >= 0; i--) {
                newStr = newStr + str[i];
            }
            if (newStr == str) {
                console.log(str, "is Palindrome")
            } else {
                console.log(str, "is not Palindrome")
            }
        } else {
            // For integer
            let newN = parseInt(str / 10);
            let dupl = (str % 10);
            duplNew = (duplNew * 10) + dupl;

            if (newN >= 1) {
                return isPalindrome(newN, duplNew)
            }
            if (duplNew == number) {
                console.log(number, "is Palindrome")
            } else {
                console.log(number, "is not Palindrome")
            }
        }
    }
    isPalindrome(number, 0);
    isPalindrome('Ocean', 0);
    break;
    case 1: 
      let bubbleArr = [34,5,2,65,23,15,3,42,6];
      console.log("Input array is: ", bubbleArr)
      let notSorted = false;
      let bubbleSize = bubbleArr.length;
      for(i=0; i < bubbleSize-1; i++) {
        for(j=0; j < bubbleSize-1; j++){
          if(bubbleArr[j] > bubbleArr[j+1]){
            let temp = bubbleArr[j];
            bubbleArr[j] = bubbleArr[j+1];
            bubbleArr[j+1] = temp;
            notSorted = true;
          }
        }
        if(!notSorted){
          break;
        }
      }
      console.log("Sorted array is: ", bubbleArr)
    break;

} 




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


*/

});