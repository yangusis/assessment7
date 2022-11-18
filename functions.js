// not sure how these addtional things, like split will affect ops

function addToZero(arr) {
    for(i = 0; i < arr.length; i++) {
        if(arr.includes(arr[i] * -1)) {
            console.log(true)
            return true
        }
    }
    console.log(false)
    return false
}

function hasUniqueChars(str) {
    let temp = []
    const split = str.split('')
    for(i = 0; i < split.length; i++) {
        if(temp.includes(split[i])) {
            console.log(false)
            return false
        } else {
            temp.push(split[i])
        }
    }
    console.log(true)
    return true
}

function isPangram(str) {
    let temp = /[a-z]/g
    if(str.match(temp)) {
        return true
    } else {
        return false
    }
}

function findLongestWord(arr) {
    let x = ''
    let count = 0
    for(i = 0; i < arr.length; i++) {
        if(count < arr[i].length) {
            x = arr[i]
            count = arr[i].length
        }
    }
    return count
}

addToZero([1])
// runtime: 2 ops
hasUniqueChars('Marcus')
// runtime: 6 ops
console.log(isPangram("The quick brown fox jumps over the lazy dog"))
// runtime: 44 ops
console.log(findLongestWord(['hi', 'hello', 'christopher']))
// runtime: 4 ops