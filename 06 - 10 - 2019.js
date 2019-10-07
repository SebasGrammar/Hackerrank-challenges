// Divisible Sum Pairs - https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

let test = "1 3 2 6 1 2".split(" ").map(number => Number(number))

function divisibleSumPairs(n, k, ar) {

  let counter = 0;

  for (let index in ar) {
    for (let number in ar) {
      if (!((ar[index] + ar[number]) % k) && index < number) {
        counter ++
      }
    }
  }
  
  return counter

}

console.log(divisibleSumPairs(6, 3, test))

// Migratory birds - https://www.hackerrank.com/challenges/migratory-birds/problem

let test2 = "1 4 4 4 5 3".split(" ").map(number => Number(number))

function migratoryBirds(arr) {

  let counter = {

  }

  for (let bird of arr) {
    !counter[bird] ? counter[bird] = 1 : counter[bird] ++
  }

  let account = []
  let count = 0;
  let p = 0;

  console.log(Object.entries(counter))

  for (let prop in counter) {
    if (counter[prop] > count) {
      p = prop      
      if (prop <= p) {
        count = counter[prop]
        account = [prop, counter[prop]]
        p = Number(prop)
      }
    }
  }

  return account[0]

}

// Diagonal difference - https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {

  let x = 0;
  let y = arr.length - 1;

  let left = 0;
  let right = 0;

  for (x, y; x < arr.length; x ++, y --) {

    left += arr[x][x]
    right += arr[x][y]
  }

  return Math.abs(left - right)

}

// Equalize the array - https://www.hackerrank.com/challenges/equality-in-a-array/problem

let test = "3 3 2 1 3".split(" ").map(number => Number(number))

function equalizeArray(arr) {

  let counter = {}

  let newArr = arr.map(item => counter[item] ? counter[item] ++ : counter[item] = 1)

  let values = Object.values(counter)

  return values
         .reduce((acc, cur) => acc + cur) - Math.max(...values)

}

console.log(equalizeArray(test))