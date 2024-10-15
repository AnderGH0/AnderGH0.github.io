# Exercise 00: FizzBuzz
Create a functions that takes a num argument. You should then console.log all numbers from 1 to num.

But here’s the catch : multiple of 3 should print “Fizz” and multiples of 5 shoudl print “Buzz”. Lastly if the number is multiple of 3 and 5, it should print FizzBuzz

Notes  
- Your code should be modular. You must be able to pass any numbers as n and the code should still work.
```
function fizzBuzz(number){
    for(let i = 1; i <= number; i++){    
        if(i % 3 === 0 && i % 5 === 0){ 
            console.log('FizzBuzz');
        }
        else if(i % 3 === 0){
            console.log("Fizz");
        }
        else if (i % 5 === 0){
            console.log("Buzz");
        }
        else { 
            console.log(i)
        }
    }
}

console.log(fizzBuzz(20)); // 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz
```

# Exercise 01: Ransom Note
Write a function called ransomNote which takes two parameters : noteText and magazineText.

The goal is : with all the words of magazineText, you should be able to create the noteText.

The function should return true if we are able to write the noteText with the words from magazineText or false if we can't.

```
function ransomNote(noteText, magazineText){
    magazineText = magazineText.split(' ').filter(a => a); 
    noteText = noteText.split(' ').filter(a => a);
    for(let i = 0; i < noteText.length; i++){
        if(!magazineText.includes(noteText[i])) return false
        magazineText.splice(magazineText.indexOf(noteText[i]), 1); 
    }
    return true;
}
```

# Exercise 02: Palindrome
A palindrome is any word or phrase that spells the same way both backward and forward.

For example : race car is a palindrome. (don't take spaces, periods, dots, etc in consideration)

Other examples : Madam, I'm Adam, radar, kayak, etc.

You should create a function isPalindrome that takes a parameter text and returns a boolean indicating if the provided text is a palindrome or not.

Notes  
You should be able to to ignore all special characters, spaces, dots, periods, etc. and be case insensitive
```
function isPalindrome(str){
    const myRegEx = /[a-zA-Z]/g
    let myString = str.match(myRegEx).join('');
    for(let i = 0, j = myString.length - 1; i < myString.length / 2; i++, j--){
        if(myString[i].toLowerCase() !== myString[j].toLowerCase()) return false
    }
    return true;
}
// No RegEx
function isPalindrome(str){
    str = str.toLowerCase();
    const onlyLetters = [];
    for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
            onlyLetters.push(str[i]);
        }
    };
    for(let i = 0, j = onlyLetters.length - 1; i < onlyLetters.length / 2; i++, j--){
        if(onlyLetters[i] !== onlyLetters[j]) return false
    };
    return true;
}

console.log(isPalindrome("kayak")) // true

console.log(isPalindrome("race car")) // true

console.log(isPalindrome("hello world")) // false

console.log(isPalindrome("Madam, I'm Adam")) // true
```

# Exercise 03: Caesar Cipher 
Caesar Cipher is a way of "encrypting" a text that, supposably, Julius Caesar used in his communication.

We switch every letter with, for example, two letters before in the alphabet.

The Caesar cipher function will take two parameters ``str`` and ``num``; ``str`` represents the text we want to cipher and num de amount of letters you want to go forward or backward (using negative numbers)

Notes  
- Make it case incensitive
- You should be able to loop back or forward into de the alphabet (if you have to go 3 from z, it would be c)

```
function caesarCipher(string, number){ 
    string = string.toLocaleLowerCase().split('');
    number %= 26;
    for(let i = 0; i < string.length; i++){
        const letterCode = string[i].charCodeAt();
        string[i] === ' '? string[i] = ' ' 
        : letterCode + number > 122 ? string[i] = String.fromCharCode(letterCode + number - 26) 
        : letterCode + number < 97 ? string[i] = String.fromCharCode(letterCode + number + 26)
        : string[i] = String.fromCharCode(letterCode + number);
    }
    return string.join('');
}

console.log(caesarCipher("zoo keeper", 2)); // "bqq mggrgt"

console.log(caesarCipher("bqq mggrgt", -2)); // "zoo keeper"

console.log(caesarCipher("My name is Henrique", 3)); // "pb qdph lv khqultxh "
```

# Exercise 04: Reverse Words
Create a function that takes a string parameter and return another string with all the words inversed.

Notes  
The order of the words doesn't change, just the letters of each word
```
function reverseWords(str){
    let myStr = str.split(' ')
    myStr = myStr.map((word) => word.split('').reverse().join(''));
    return myStr.join(' ');
}

console.log(reverseWords("This is a string of words")); // 'sihT si a gnirts fo sdrow'

console.log(reverseWords("Learning Javascript is fun!")); // 'gninraeL tpircsavaJ si !nuf'
```

# Exercise 05: Create Own Reverse
Create a function that takes an array and reverses it.

Notes  
- Don't use reverse()
- Don't create a new array and push elements to it.
```
function myReverse(arr){
    for(let i = 1; i < arr.length; i++){
        let placeholder = arr.splice(i,1);
        arr.unshift(placeholder[0]);
    }
    return arr;
}

console.log(myReverse(['a', 'b', 'c'])); // [ 'c', 'b', 'a' ] 

console.log(myReverse([null, true, 'xyz', []])); // [ [], 'xyz', true, null ]

console.log(myReverse([1, 2, 3, 4, 5])); // [ 5, 4, 3, 2, 1 ]

```

# Exercise 06: Pair Sum
Write a function that takes as argument an array of numbers numArray and the sum we want to obtain.

Your function should return every pair of numbers from numArray that adds up to the 'sum'

Notes  
- The result should be an array of arrays.
- Any number in the array can be used in multiple pairs (look at the "4" in the exemple below)
```
function twoSums(numArray,sum){
    const pairs = [];
    let current = []; 
    for(let i = 0; i < numArray.length; i++){
        for(let j = i+1; j < numArray.length; j++){
            if(numArray[i] + numArray[j] === sum){
                current.push(numArray[i], numArray[j]);
                pairs.push(current);
                current = [];
            }
        }
    }
    return pairs;
};

console.log(twoSums([1, 6, 4, 5, 3, 3], 7)); // [[6,1], [3,4], [3,4]]
console.log(twoSums([1, 6, 4, 5, 3, 3], 6)); // [ [ 1, 5 ], [ 3, 3 ] ]
console.log(twoSums([1, 6, 4, 5, 3, 3], 12)) // [ [] ] 
```

# Exercise 07: Fibonacci 
Fibonacci sequence starts with 1 and 1 and the next numbers are always the sum of the last two numbers. So... Here is the sequence :

``1 1 2 3 5 8 13 21 34 ...``

Write a function that takes a num number and returns an array with the num first elements of the Fibonacci sequence.
```
function fibonacci(num){
    const fibo = [1,1];
    if(num === 0) return []
    else if(num === 1) return [1]
    for(let i = 0; fibo.length < num; i++){
        fibo.push(fibo[i] + fibo[i+1])
    }
    return fibo;
}

console.log(fibonacci(4)) // [1, 1, 2, 3]
console.log(fibonacci(9)) // [1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(6)) // [1, 1, 2, 3, 5, 8]
```