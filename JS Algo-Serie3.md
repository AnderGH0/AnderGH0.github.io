# Exercise 00: Oddish and Evenish Numbers
Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
```
function oddishOrEvenish(number){
    let sum = 0;
    for(let letter of number.toString()){
        sum += parseInt(letter);
    }
    return sum % 2 === 0 ? "Evenish": "Oddish";
}

console.log(oddishOrEvenish(43)); // "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

console.log(oddishOrEvenish(373)); // "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

console.log(oddishOrEvenish(4433)); // "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0
```

# Exercise 01: Total Price of Groceries
Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number.
```
function getTotalPrice(groceries){
    let total = 0;
    for(let product of groceries){
        total += product.quantity * product.price;
        total *=1
    }
    return total.toFixed(2); //I added a toFixed() here because for the 4th test the it gives me 0.30000000000000004 
}

// 1 bottle of milk:
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 }
])); // 1.5

// 1 bottle of milk & 1 box of cereals:
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
])); // 4

// 3 bottles of milk:
console.log(getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
])); // 4.5

// Several groceries:
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
])); // 10.4

// Some cheap candy:
console.log(getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
])); // 0.3
```

# Exercise 02: Reverse Odd Length Words
Given a string, reverse all the words which have odd length. The even length words are not changed.

Notes  
There is exactly one space between each word and no punctuation is used.
```
function reverseOdd(str){
    str = str.split(' ');
    for(let i = 0; i < str.length; i++){
        if(str[i].length % 2 !== 0) {
            str[i] = str[i].split('').reverse().join('');
        }
    }
    return str.join(' ');
}

console.log(reverseOdd("Bananas")); // "sananaB"

console.log(reverseOdd("One two three four")); // "enO owt eerht four"

console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length")); // "Make sure you only reverse words of odd length"
```

# Exercise 03: Smooth Sentences
Carlos is a huge fan of something he calls smooth sentences.  

A smooth sentence is one where the last letter of each word is identical to the first letter the following word (and not case sensitive, so "A" would be the same as "a").  

The following would be a smooth sentence "Carlos swam masterfully" because "Carlos" ends with an "s" and swam begins with an "s" and swam ends with an "m" and masterfully begins with an "m".  

Create a function that determines whether the input sentence is a smooth sentence, returning a boolean value true if it is, false if it is not.

Notes  
- The last and first letters are case insensitive.
- There will be no punctuation in each sentence.
```
function isSmooth(str){
    str = str.split(' ');
    for(let i = 0; i < str.length - 1; i++){
        if( str[i][str[i].length - 1] !== str[i+1][0]) return false
    }
    return true;
};

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids")) // true

console.log(isSmooth("Someone is outside the doorway")) // false

console.log(isSmooth("She eats super righteously")) // true
```

# Exercise 04: Seven Boom
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
```
function sevenBoom(arr){
    arr = arr.join('');
    for(let num of arr){
        if(num === '7') return "Boom!";
    }
    return "There is no 7 in the array";
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // "Boom!"
// 7 contains the number seven.

console.log(sevenBoom([8, 6, 33, 100])); // "there is no 7 in the array"
// None of the items contain 7 within them.

console.log(sevenBoom([2, 55, 60, 97, 86])); // "Boom!"
// 97 contains the number seven.
```

# Exercise 05: Convert Celsius / Fahrenheit
Create a function that converts Celsius to Fahrenheit and vice versa.

Notes  
- Round to the nearest integer.
- If the input is incorrect, return "Error".
- Look on Google how to convert F to C and vice-versa

```
function convert(temp){
    const arr = temp.split('');
    const degrees = parseInt(arr.splice(0,arr.indexOf('°')).join(''));
    if(temp.includes('°C')){
        return `${Math.round(degrees * 9/5 + 32)}°F` ;
    } 
    else if(temp.includes('°F')){
        return `${Math.round((degrees - 32) * 5/9)}°C` ;
    } 
    return "Error";
};

console.log(convert("35°C")); // "95°F"

console.log(convert("19°F")); // "-7°C"

console.log(convert("33")); // "Error"
```

# Exercise 06: Broken Keys
Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

Notes  
- Broken keys should be ordered by when they first appear in the sentence.
- Only one broken key per letter should be listed.
- Letters will all be in lower case.

```
function findBrokenKeys(right, wrong){
    const brokenKeys = [];
    for(let i = 0; i < right.length; i++){
        if(right[i] !== wrong[i] && brokenKeys.indexOf(right[i]) === -1){
            brokenKeys.push(right[i])
        }
    }
    return brokenKeys;
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday")); // ["p"]

console.log(findBrokenKeys("starry night", "starrq light")); // ["y", "n"]

console.log(findBrokenKeys("beethoven", "affthoif5")); // ["b", "e", "v", "n"]
```