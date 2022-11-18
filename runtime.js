const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppendXL = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsertXL = perf.stop();

perf.start();
doublerInsert(tinyArray);
let resultsInsertTiny = perf.stop();

perf.start();
doublerInsert(tinyArray);
let resultsAppendTiny = perf.stop();

perf.start();
doublerInsert(smallArray);
let resultsInsertSmall = perf.stop();

perf.start();
doublerInsert(smallArray);
let resultsAppendSmall = perf.stop();

perf.start();
doublerInsert(mediumArray);
let resultsInsertMedium = perf.stop();

perf.start();
doublerInsert(mediumArray);
let resultsAppendMedium = perf.stop();

perf.start();
doublerInsert(largeArray);
let resultsInsertLarge = perf.stop();

perf.start();
doublerInsert(largeArray);
let resultsAppendLarge = perf.stop();

console.log('Results for the extraLargeArray');
console.log("insert", resultsInsertXL.preciseWords);
console.log("append", resultsAppendXL.preciseWords);

console.log("           Insert | Append")
console.log("tinyArray:", resultsInsertTiny.preciseWords, "|", resultsAppendTiny.preciseWords)
console.log("smallArray:", resultsInsertSmall.preciseWords, "|", resultsAppendSmall.preciseWords)
console.log("mediumArray:", resultsInsertMedium.preciseWords, "|", resultsAppendMedium.preciseWords)
console.log("largeArray:", resultsInsertLarge.preciseWords, "|", resultsAppendLarge.preciseWords)