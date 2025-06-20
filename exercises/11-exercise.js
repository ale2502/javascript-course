//const array = [10, 20, 30];
//array[2] = 99;
//console.log(array);

//const array = [1, 20, 22, 24, 5];
//const lastValue = array[array.length - 1];
//console.log(lastValue);

/*
function arraySwap(array) {
    firstValue = array[0];
    lastValue = array[array.length -1];
    array[0] = lastValue;
    array[array.length - 1] = firstValue;
    console.log(array);
}

arraySwap(['hi', 'good morning', 'tchau']);
*/

//for (let i = 0; i <= 10; i += 2) {
//    console.log(i);
//}

//for (let i = 5; i >= 0; i--) {
//    console.log(i);
//}

//let i = 0;
//while (i <= 10) {
//    console.log(i)
//    i += 2;
//}

//let i = 5;
//while (i >= 0) {
//    console.log(i)
//    i--;
//}

/*
const nums = [1, 2, 3];
const numsPlusOne = [];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    numsPlusOne.push(num + 1);
}
console.log(numsPlusOne);
*/

function addOne(array) {
    const numsPlusOne = [];

    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        numsPlusOne.push(num + 1);
    }
    console.log(numsPlusOne);
}

//11i

function addNum(array, num) {
    const result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(array[i] + num);
    }
    console.log(result);
}

//11j

function addArrays(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        const sum = array1[i] + array2[i];
        result.push(sum);
    }
    console.log(result);
}

//11k

function countPositive(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            total++;
        }
    }
    console.log(total);
}

//11l

function minMax(nums) {
    const result = {
        min: nums[0],
        max: nums[0]
    }
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        if (value < result.min) {
            result.min = value;
        }
        if (value > result.max) {
            result.max = value;
        }
    }
    console.log(result);
}

//11m

function minMaxB(nums) {
    const result = {
        min: null,
        max: null
    };
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        if (result.min === null || value < result.min) {
            result.min = value;
        }
        if (result.max === null || value > result.max) {
            result.max = value;
        }
    }
    console.log(result);
}

//11n

function countWords(words) {
    const result = {};
    for (let i = 0; i < words.length; i++) {
        if (result[words[i]]) {
            result[words[i]]++;
        } else {
            result[words[i]] = 1;
        }
    }
    console.log(result);
}

//11o

/*
const array = ['hello', 'world' ,'search', 'churros']
for (let i = 0; i < array.length; i++) {
    if (array[i] !== 'search') {
        const x = -1
    } else {
        x = i;
    }
}
*/

//11p

/*
const array = ['hello', 'world' ,'search', 'churros', 'search']
for (let i = 0; i < array.length; i++) {
    if (array[i] !== 'search') {
        const x = -1;
    } else {
        x = i;
        break;
    }
}
console.log(x);
*/

//11q

function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return i;    
        }
    }
    return -1;   
}

//11r

function removeEgg(foods) {
    let result = [];
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === 'egg') {
            continue;
        } else {
            result.push(foods[i]);
        }
    }
    console.log(result);
}

//11s

function removeTwoEgg(foods) {
    let result = [];
    let k = 0;
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === 'egg' && k < 2) {
            k++;
            continue;
        }
        result.push(foods[i]);    
    }
    console.log(result);
}

function removeTwoEggg(foods) {
    let result = [];
    let k = 0;
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === 'egg') {
            if (k < 2) {
                k++;
                continue;
            }
        }
        result.push(foods[i]);    
    }
    console.log(result);
}

//11t

function removeLastTwoEgg(foods) {
    let result = [];
    let k = 0;
    const reversedFoods = foods.reverse();
    for (let i = 0; i < foods.length; i++) {
        if (reversedFoods[i] === 'egg' && k < 2) {
            k++;
            continue;
        }
        result.push(reversedFoods[i]);    
    }
    console.log(result.reverse());
}
//removeLastTwoEgg(['egg', 'apple', 'egg', 'egg', 'ham']);

//11u
//Here we basically have to .slice() the array to in fact create a new array. That's what this function does.

//11v

function fizzBuzz() {
    for (let i = 0; i <= 20; i++ ) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
            continue;
        } else if (i % 3 === 0) {
            console.log('Fizz');
            continue;
        } else if (i % 5 === 0) {
            console.log('Buzz');
            continue;
        } else {
            console.log(i);
        }
    }
}

//11w

function unique(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const word = array[i];
        if (findIndex(result, word) === -1) {
            result.push(word);
        }
    }
    return result;
}




