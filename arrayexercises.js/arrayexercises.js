let expectedResult;
/**
 * Task 1: You are provided with 2 arrays, firstArray, and secondArray
 * Make a new thirdArray, that contains elements of the firstArray, followed by 
 * elements of the secondArray.
 * Please don't do it manually :) 
 */

let firstArray = [1, 2, 3, 4, 'a', true, false];
let secondArray = ['hello', 'I', 'am', 'not', 'an', 'array', 'jkd']; 

expectedResult = [1, 2, 3, 4, 'a', true, false, 'hello', 'I', 'am', 'not', 'an', 'array', 'jkd'];
// solution of Task 1

let thirdArray = firstArray.concat(secondArray);
console.log(thirdArray);

/**
 * Task 2: You are provided with an array of numbers
 * create another array that contains elements of the provided array, but in reverse order
 * do not use .reverse() method
 * Please don't do it manually :) 
 */

let fourthArray = [1, 500, 10000, 123456, 234, 500, 10000, 12345, 20000];

expectedResult = [20000, 12345, 10000, 500, 234, 123456, 10000, 500, 1];
// solution of Task 2
//let i = console.log(fourthArray.length);
let sortFourthArray = [];
for ( let i = fourthArray.length-1; i >= 0; i--) {
    let sortArray = fourthArray.pop();
    sortFourthArray.push(sortArray);
}
console.log(sortFourthArray);

/**
 * Task 3: You are provided with an array that contains some duplicated elements
 * create another array that contains ONLY unique elements of the given array
 * the order of the new array isn't important
 * Please don't do it manually :) 
 */

let fifthArray = [1, 500, 10000, 'world', 'yeah', 'bye bye', 123456, 234, 500, 10000, 12345, 20000, true, true, false, 'hello', 'world'];

expectedResult = [1, 500, 10000, 'world', 'yeah', 'bye bye', 123456, 234, 12345, 20000, true, false];

let sortFifthArray = [...new Set(fifthArray)]; //set all duplicate and single.
console.log("sortFifthArray", sortFifthArray);
let result = [];
sortFifthArray.forEach((el) => {
if ( result.indexOf(el) === -1) {
    result.push(el)
}

})

console.log("result",result);

/**
 * Task 4: You are provided 2 arrays
 * write a logic that will compare elements of the 2 arrays to find out if they contain same elements
 * it is possible that the one of the array is a sub array of the other, in which case they shouldn't be considered as containing same elements
 * the order of elements in each array can be different
 * Please don't do it manually :) 
 */

// sixthArray and seventhArray should be considered as being similar
let sixthArray = [1, 2, 3, 'hello', true, false];
let seventhArray = ['hello', false, 1, 3, true, 2];

//another method
            

let  matchArray = [];
for (let i = 0; i< sixthArray.length; i++){
    for (let j = 0; j < seventhArray.length; j++) {
        if (sixthArray[i] === seventhArray[j]){
            matchArray.push(true);
            i++;
           j = 0;
        }else {
            j++;
        }
    }
}

console.log(matchArray);
matchArray.forEach ((el) => {
   if (el === true){
    console.log("both arrays contain same elements")   
}else {
    console.log(false)
}});

// eighthArray and ninthArray are not
let eighthArray = [1, 2, true, false, 'hello', 3, 'moi moi'];
let ninthArray = [];

let  compareArray = [];
for (let i = 0; i< eighthArray.length; i++){
    for (let j = 0; j < ninthArray.length; j++) {
        if (eighthArray[i] === ninthArray[j]){
            compareArray.push(true);
            i++;
           j = 0;
        }else {
            compareArray.push(false);
            j++;
        }
    }
}

console.log(compareArray);
/**
 * Task 5: The following array is nested (having array inside array)
 * you need to create a new array that will deconstruct the nested array so that it is no longer nested
 * the order isn't important
 * Please don't do it manually :) 
 */

let tenthArray = [
    'one', 'two', 'three', 1, 2, 3, false, 'false', [['oh oh'], [[['tom']], 'jerry'], ['not', 'again', ['yes', 'whynot?', true]]]
]

expectedResult = ['one', 'two', 'three', 1, 2, 3, false, 'false', 'oh oh', 'tom', 'jerry', 'not', 'again', 'yes', 'whynot?', true]

/**
 * Task 6: The array you are given contains all kinds of personal information
 * Filter out all email addresses into a separate array
 * Filter out all phone numbers into a separate array
 * Please don't do it manually :) 
 */

let peopleInfo = [
    'ron', '044 123 345', 'lonelyspider@email.com', 
    'hermione', '0123-414-443', 'hermione@email.com', 
    'harry', '(0123) 123 4324', 'ginnyforever@email.com'
];

let expectedNamesArray = ['ron', 'hermione', 'harry'];
let expectedPhones = ['044 123 345', '0123-414-443', '(0123) 123 4324']
let expectedEmails = ['lonelyspider@email.com', 'hermione@email.com', 'ginnyforever@gmail.com']

let emailArray =  peopleInfo.filter((el) => {
    const splitted = el.split(''); //splitted into character
    const containsEmail = splitted.some((el) => !Number.isNaN(parseInt(el)))

    return containsEmail;
});
console.log(emailArray);

let filterNamesArray = peopleInfo.filter((el) => {
    const containsNumber = el.split('').some((el) => !Number.isNaN(parseInt(el)))

    if (containsNumber) return false
    return el.indexOf('@') === -1
})
console.log(filterNamesArray);
/**
 * Task 7: The current array contains a sample text
 * use the .split(' ') method to split the paragraph to an array of words
 * iterate through the array of words, check if each word contain the letter 'o'
 * if it does, store a value of 1 to a newArray, otherwise 0
 * Please don't do it manually :) 
 * Example:
 * sample = ['Lorem', 'ipsum', 'dolor', 'sit']
 * result = [1, 0, 1, 0]
 * 
 */

const sample = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod, soluta debitis reiciendis recusandae necessitatibus consequatur. Et odit quas quis, nulla sequi voluptatem, impedit optio, illo nihil at distinctio aliquid.';

sample.split(",");
console.log(typeof sample);
console.log(sample.length);
for (let i = 0; i < sample.length; i++) {
    let count = [];
    if ( sampel[i] === o){
        count.push(1);
    }else if ( sample[i] === " "){
        count.push(" ");
    }
}