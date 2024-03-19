function addToZero(nums) {
    if (nums.length < 2) {
        return false;
    }

    const set = new Set();

    for (let num of nums) {
        if (set.has(-num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}
console.log(addToZero([2, 3, 4, -2])); // true
console.log(addToZero([1, 2, 3])); // false
// time complexity: O(n)
// space complexity: O(n)

function hasUniqueChars(str) {
    const set = new Set();

    for (let char of str) {
        set.add(char);
    }
    return set.size === str.length;
}

console.log(hasUniqueChars('Monday')); // true
console.log(hasUniqueChars('Moonday')); // false
// time complexity: O(n)
// space complexity: O(n)

function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const sentenceSet = new Set();

    for (let char of sentence) {
        if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
            sentenceSet.add(char.toLowerCase());
        }
    }
    return alphabet.length === sentenceSet.size;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog')); // true
console.log(isPangram('I like cats, but not mice')); // false
// time complexity: O(n)
// space complexity: O(n)

function findLongestWord(array) {
    let longestLength = 0;
    for (let word of array) {
        longestLength = Math.max(longestLength, word.length);
    }

    return longestLength;
}

console.log(findLongestWord(['hi', 'hello'])); // 5

// time complexity: O(n)
// space complexity: O(1)