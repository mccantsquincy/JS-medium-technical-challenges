// 1. Falsy or Truthy
// given two values, return the first one if it is falsy, otherwise reurn the second one.

// function filterOutFalsy(num1, num2) {
//     return !num1 ? num1 : num2;
    // if (!num1) {
    //     return num1;
    // } else {
    //     return num2;
    // }
// }

// console.log(filterOutFalsy(0, 500));

// function filterOutFalsy(num1, num2) {
    // return !num1 ? num1 : num2;
//     if (!num1) {
//         return num1;
//     } else {
//         return num2;
//     }
// }

// console.log(filterOutFalsy(false, 100));

function filterOutFalsy(bool, string) {
    if(!bool) {
        return bool
    } else {
        return string
    }
}

console.log(filterOutFalsy(true, 'Dog'))

// 2. Return the length of any given array

// function arrLength(arr) {
//     return arr.length;
// }

// console.log(arrLength([1,2,3]));

// function arrLength(arr) {
//     return arr.length;
// }

// console.log(arrLength([5,0,-4,1]));

function arrLength(arr) {
    return arr.Length;
}

console.log(arrLength([]));

// 3. Get the last element in a array

// function lastElem(arr) {
//     return arr[arr.length - 1];
// }

// console.log(lastElem([3,2,0,6,2]));

// function lastElem(arr) {
//     return arr[arr.length - 1];
// }

// console.log(lastElem(['dog', 'cat', 'ball']));

function lastElem(arr) {
    return arr[arr.length - 1];
}

console.log(lastElem([null, 5, false]));

// 4. Find the sum of an array

// function arrSum(arr) {
//     let sum = 0
//     // this is how you loop through every element in an array
//     for( let i = 0; i < arr.length; ++i) {
//        sum = sum + arr[i];
//     } 
//     return sum
// }

// console.log(arrSum([2, 2, 2]));

// function arrSum(arr) {
//   let sum = 0;
//   for(let i = 0; i < arr.length; ++i) { 
//     sum = sum + arr[i];
//   }
//   return sum
// }

// console.log(arrSum([100, 200, 500]));

// function arrSum(arr) {
//     let sum = 0;
//     for( let i = 0; i < arr.length; ++i) {
//       sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(arrSum([0, -5, -10]));

// 5. add up the nnumbers from a single number

// function progressiveSum(num) {
//     let sum = 0;
//     for (let i=1; i<=num; ++i) {
//     sum = sum + i;
//     }
//     return sum;
// }

// console.log(progressiveSum(3));

// function progressiveSum(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; ++i) {
//         sum = sum + i;
//     }
//     return sum;
// }

// console.log(progressiveSum(4));

function progressiveSum(num) {
    let sum = 0;
    for ( let i = 1; i <= num; ++i ) {
        sum = sum + i;
    }
    return sum;
}

console.log(progressiveSum(600));

// 6. calculate the time
// given the number in seconds calculate this number in mm:ss format.
// calcTime(66) -> '01:60'
// calcTime(50) -> '00:50'
// calcTime(300) -> '05:00'

// function calcTime(seconds) {
//     let timerMinutes = Math.floor(seconds / 60);
//     let timerSeconds = seconds % 60;

//     if(timerMinutes.toString().length === 1) {
//       timerMinutes = '0' + timerMinutes
//     } 
    
//     if (timerSeconds.toString().length === 1) {
//         timerSeconds = timerSeconds + '0'
//     }

//     return timerMinutes + ':' + timerSeconds;
// }

// console.log(calcTime(300));

// function calcTime(seconds) {
//     let timerMinutes = Math.floor(seconds / 60);
//     let timerSeconds = seconds % 60;

//     if (timerMinutes.toString().length === 1) {
//         timerMinutes = '0' + timerMinutes
//     }

//     if (timerSeconds.toString().length === 1) {
//         timerSeconds = timerSeconds + '0'
//     }

//     return timerMinutes + ':' + timerSeconds
// }

// console.log(calcTime(50));

// function calcTime(seconds) {
//     // declare a variable for minutes and round down 'Math.floor()'
//     let timerMinutes = Math.floor(seconds / 60);
//     // declare a variable for seconds with and find remainder with %
//     let timerSeconds = seconds % 60;
//     // because we want 'mm:' format we need to convert number into a string using '.toString().length'
//     if (timerMinutes.toString().length === 1) {
//         timerMinutes = '0' + timerMinutes
//     }
//     // because we want ':ss' format we need to convert number into a string using '.toString().length'
//     if (timerSeconds.toString().length === 1) {
//         timerSeconds = timerSeconds + '0'
//     }

//     return timerMinutes + ':' + timerSeconds
// }

// console.log(calcTime(300))

function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;

  if(timerMinutes.toString().length === 1){
    timerMinutes = '0' + timerMinutes;
  }

  if(timerSeconds.toString().length === 1){
    timerSeconds = timerSeconds + '0'
  }

  return timerMinutes + ':' + timerSeconds
}

console.log(calcTime(66))

// 7. Find the Largest number
// given an array of numbers, return the largest number of that array
// getMax([5, 100, 0])
// getMax([12, 10, -20])
// getMax([-300, -100, -200])

// function getMax(arr) {
//   let max = arr[0];
//   for(let i = 0; i < arr.length; ++i) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//    }
//    return max;
// }

// console.log(getMax([5, 100, 0]));

// function getMax(arr) {
// let max = arr[0]
//     for(let i = 0; i < arr.length; ++i) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(getMax([12, 10, -20]));

function getMax(arr) {
    let max = arr[0];
    for( let i = 0; i < arr.length; ++i) {
        if( arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMax([-300, -100, -200]));

// 8. reverse the string
// reverseString('abc')
// reverseString('David')
// reverseString('This is cool')

// 1st method incrementing for loop method

// function reverseString(str) {
//     let reversedString = '';
//     for(let i = 0; i < str.length; ++i) {
//         reversedString = str[i] + reversedString;
//     }
//     return reversedString
// }

// console.log(reverseString('abc'))

// 2nd method array reverse
// Arrays have reverse property
// to convert string into a array 'abc'.split('')

// function reversedString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('abc'));

// function reverseString(str) {
//     let reversedString = '';
//     for(let i = 0; i < str.length; ++i) {
//         reversedString = str[i] + reversedString;
//     }

//     return reversedString
// }

// console.log(reverseString('David'));

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('David'));

// function reverseString(str) {
//     let reversedString = '';
//     for(let i = 0; i < str.length; ++i) {
//         reversedString = str[i] + reversedString;
//     }

//     return reversedString;
// }

// console.log(reverseString('This is cool'));

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('This is cool'))

// 9. Turn every element in an array into 0

// for loop method

// function convertToZeros(arr) {
//     for(let i = 0; i < arr.length; ++i) {
//         arr[i] = 0
//     }

//     return arr
// }

// console.log(convertToZeros([5, 100, 0]));

// array fill method

// function convertToZeros(arr) {
//     return new Array(arr.length).fill(0);
// }

// console.log(convertToZeros([1, 2, 3, 4]))

// array map method

// function convertToZeros(arr) {
//   // .map converts every element of the array to what we set on the rigth side of the operation
//   return arr.map(elem => 0) 
  
// }

// console.log(convertToZeros([2, 5, 7, 9]))

// function convertToZeros(arr) {
//     for(let i = 0; i < arr.length; ++i) {
//         arr[i] = 0;
//     }

//     return arr
// }

// console.log(convertToZeros([10, 20, 30]))

// function convertToZeros(arr) {
//     return new Array(arr.length).fill(0);
// }

// console.log(convertToZeros([20, 30, 40]))

function convertToZeros(arr) {
    return arr.map(elem => 0);
}

console.log(convertToZeros([20, 30, 40]))