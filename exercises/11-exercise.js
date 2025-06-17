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

function addNum(array, num) {
    const result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(array[i] + num);
    }
    console.log(result);
}

//11i

function addArrays(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        const sum = array1[i] + array2[i];
        result.push(sum);
    }
    console.log(result);
}

addArrays([1, 2, 3], [1, 7, 8]);
