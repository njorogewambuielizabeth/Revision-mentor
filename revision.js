// 1. How can we use a callback function to calculate the 
// sum of three numbers Asynchronously?
function calculateSumAsync(a, b, c, callback) {
    setTimeout(function() {
      const sum = a + b + c;
      callback(sum);
    }, 0);
  }
  
  function callbackFunction(result) {
    console.log('The sum is: ' + result);
  }
  
  calculateSumAsync(2, 4, 6, callbackFunction);
  console.log('Calculating sum...');


//2 Create a function called filterArray that takes an array
//  of numbers and a callback function as parameters. The 
// filterArray function should iterate through the array and 
// apply the callback function to each element. The callback 
// function should determine whether the element  should be 
// included in the filtered array or not. The filtered array 
// should then be returned as the result
function filterArray(numbers, callback) {
    const filteredArray = [];
    for (let i = 0; i < numbers.length; i++) {
      if (callback(numbers[i])) {
        filteredArray.push(numbers[i]);
      }
    }
    return filteredArray;
  }

//   3. Write a function that does the following:
//   Console logs the numbers from 1 to n where n is the integer the function takes as its parameter      
//  Logs fizz instead of the number for multiples of 3 
//  Logs buzz instead of the number for multiples of 5
//  Logs fizzbuzz for numbers that are multiples of both 3 and 
//  Example: fizzBuzz(5)
  function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
      } else if (i % 3 === 0) {
        console.log('fizz');
      } else if (i % 5 === 0) {
        console.log('buzz');
      } else {
        console.log(i);
      }
    }
  }

//   4. Given a string (“welcome to javascript class”), reverse each word in the sentence. 
  const reverseWords = (sentence) => {
    return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  };
  
  const sentence = "welcome to javascript class";
  const reversedSentence = reverseWords(sentence);
  console.log(reversedSentence);

// A callback function is a function that is passed as an argument 
// to another function and gets executed at a specific point or
// in response to an event. It allows you to define a custom action 
// or behavior that should happen when a certain condition is met or 
// when an event occurs. By passing a callback function to another 
// function, you can control what happens next in your code.  

  function calculate(num1, num2, callback) {
    const result = num1 + num2;
    callback(result);
  }
  
  function displayResult(result) {
    console.log("The result is:", result);
  }
  
  calculate(5, 10, displayResult);
  
 
  