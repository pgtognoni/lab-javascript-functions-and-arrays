// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a
  } else return b
}


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  let longest = null;
  let length = 0;

  words.forEach(item => {
    if (item.length > length) {
      length = item.length;
      longest = item;
    }
  })
  
  return longest;

}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

  return numbers.reduce((a,b) => a + b, 0)

}



// Iteration #3.1 Bonus:


function sum(arr) {

  let sum = 0;

  arr.forEach(item => {

    if (typeof item == "object") {
      throw new Error("Unsupported data type sir or ma'am")
    } else if (typeof item == "number") { 
      sum += item
    } else if (typeof item == "string") {
      sum += item.length
    } else if (typeof item == "boolean") {
      if (item) sum += 1
    }

  })

  return sum; 

}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    
  if (arr.length < 1) {
    return null
  }

  let sum = arr.reduce((a,b) => a + b);

  return sum / arr.length;

}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr) { 
  
  if (arr.length < 1) {
    return null
  }

  let sum = 0;
  
  arr.forEach(item => {
    sum += item.length
  })

  return sum / arr.length
}

// Bonus - Iteration #4.1
function avg(arr) {

  if (arr.length < 1) {
    return null
  }

  let sum = 0;

  arr.forEach(item => {

    if (typeof item == "object") {
      throw new Error("unsupported data type")
    } else if (typeof item == "number") { 
      sum += item
    } else if (typeof item == "string") {
      sum += item.length
    } else if (typeof item == "boolean") {
      if (item) sum += 1
    }
    })

  return sum / arr.length
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arr) {

  if (arr.length < 1) {
    return null
  }

  const unique = arr.filter((item, index) => arr.indexOf(item) === index)

  return unique

}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, word) {
  if (arr.length < 1) {
    return null
  }

  return arr.includes(word)
  
}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arr, word) {
  
  let count = 0;

  arr.forEach(item => {
    item == word ? count += 1 : count
  })

  return count;

}



// Iteration #8: Bonus

//   let sum1 = 0;
//   let sum2 = 0;

//   arr.forEach(item => {
//     if(item.every(subItem => subItem == 1)) {
//       sum1 += 1
//     } else if(item.every(subItem => subItem == 2)) {
//       sum2 += 1
//     }
//   })

//   if (sum1 == arr.length) {
//     return 1
//   } else if (sum2 == arr.length) {
//     return 16
//   }

// }

//BONUS #8.1 PRODUCT OF ADJACENT NUMBERS

function greatestProduct(matrix) {

  let max = 0;
  let product = 0;
  let length = matrix.length;
  
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {

      //check for max product in a Row
      if ((j-3) >= 0) {
        product = matrix[i][j]*matrix[i][j-1]*matrix[i][j-2]*matrix[i][j-3];
        if (max < product) max = product;
      }

      //check for max product in a Column
      if ((i-3) >= 0) {
        product = matrix[i][j]*matrix[i-1][j]*matrix[i-2][j]*matrix[i-3][j];
        if (max < product) max = product;
      }

      //check for max product in a Diagonal
      if ((i-3) >= 0 && (j-3) >= 0)
      product = matrix[i][j]*matrix[i-1][j-1]*matrix[i-2][j-2]*matrix[i-3][j-3];
      if (max < product) max = product;
    }
  }

  return max
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
