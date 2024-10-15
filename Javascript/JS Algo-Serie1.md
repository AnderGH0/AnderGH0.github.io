# Exercise 00: Makes Ten
Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
``` 
function makesTen(a, b){
    return a === 10 || b === 10 || a + b === 10;
}

console.log(makesTen(9, 10)); // true

console.log(makesTen(9, 9)); // false

console.log(makesTen(1, 9)); // true
``` 

# Exercise 01: Calculate Age
Create a function that takes the age in years and returns the age in days.
```
function calcAge(age){
    return age * 365;
}

console.log(calcAge(65)); // 23725

console.log(calcAge(0)); // 0

console.log(calcAge(20)); // 7300
```

# Exercise 02: Add Up
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
```
function addUp(number){
    let total= 0;
    for(let i= 1; i <= number; i++){
        total += i;
    }
    return total;
}

console.log(addUp(4)); // 10

console.log(addUp(13)); // 91

console.log(600); // 180300
```

# Exercise 03: Min and Max
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
```
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)]
}; 

console.log(minMax([1, 2, 3, 4, 5])); // [1, 5]

console.log(minMax([2334454, 5])); // [5, 2334454]

console.log(minMax([1])); // [1, 1]
```

# Exercise 04: Detect Lowercase Word
A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
- The wanted word is in lowercase.
- The crowd of letters is all in uppercase.
- Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
```
function detectWord(str){
    let word = '';
    for(let letter of str){
        if(letter === letter.toLowerCase()){
            word += letter;
        }
    }
    return word;
};

console.log(detectWord("UcUNFYGaFYFYGtNUH")); // "cat"

console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr")); // "burglar"

console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")); // "embezzlement"
```

# Exercise 05: Sort Drinks
You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
```
const drinks = [
    {name: "lemonade", price: 10},
    {name: "lime", price: 10},
    {name: "coke", price: 8},
    {name: "vodka", price: 17},
    {name: "water", price: 3},
];

function sortDrinkByPrice(drinks){
    return drinks.sort((a,b) => a.price - b.price)
}

console.log(sortDrinkByPrice(drinks)); 
/*
[
    {name: 'water', price: 3 },
    {name: 'coke', price: 8 },
    {name: 'lemonade', price: 10 },
    {name: 'lime', price: 10 },
    {name: 'vodka', price: 17 }
]
*/
```

# Exercise 06: Count Animal Legs
In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
- chickens = 2 legs
- cows = 4 legs
- pigs = 4 legs

The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
```
function animals(chickens, cows, pigs){
    return (chickens * 2) + (cows * 4) + (pigs * 4);  
}

console.log(animals(2, 3, 5)); // 36

console.log(animals(1, 2, 3)); // 22

console.log(animals(5, 2, 8)); // 50
```

# Exercise 07: Profitable Gamble
Create a function that takes three arguments probability, prize, pay and returns true if probability * prize > pay; otherwise return false. 

To illustrate:  
`profitableGamble(0.2, 50, 9)`  
... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.  
```
function profitableGamble(probability, prize, pay){
    return (probability * prize) - pay > 0 
}

console.log(profitableGamble(0.2, 50, 9)); // true

console.log(profitableGamble(0.9, 1, 2)); // false

console.log(profitableGamble(0.9, 3, 2)); // true
```

# Exercise 08: FPS
Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
```
function frames(frames, minutes){
    return frames * (minutes * 60);
}

console.log(frames(1, 1)); // 60

console.log(frames(10, 1)); // 600

console.log(frames(10, 25)); // 15000
```

# Exercise 09: Fuel Needed
A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
Create a function which calculates the amount of fuel it needs, given the distance.
```
function calculateFuel(distance){
    return Math.max(distance*10,100); 
}

console.log(calculateFuel(15)); // 150

console.log(calculateFuel(23.5)); // 235

console.log(calculateFuel(3)); // 100
``` 
