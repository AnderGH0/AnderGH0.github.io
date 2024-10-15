# Exercise 1: Remove Duplicates
Create a function that remove duplicates from an array.
```
const removeDuplicates = (arr) => arr.filter((a, index) => arr.indexOf(a) === index);

console.log(removeDuplicates([4, 9, 5, 1, 3, 2, 4, 1, 8]));
// [4, 9, 5, 1, 3, 2, 8]

console.log(removeDuplicates(["hello", "world", "goodbye", "world"]));
// ['hello', 'world', 'goodbye']

console.log(removeDuplicates([true, true, false, true, true, false]));
// [true, false]
```

# Exercise 2: Capitalize
Create a function that capitalizes a string.
```
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalize("belgium")); // "Belgium"

console.log(capitalize("brazil")); // "Brazil"

console.log(capitalize("brussels")); // "Brussels"
```

# Exercise 3: Day Difference
Find the days between 2 given days
```
const dayDif = (date1,date2) => Math.abs((date1.valueOf() / 86400000) - (date2.valueOf() / 86400000)); 

console.log(dayDif(new Date("2020-10-21"), new Date("2021-10-22"))); //  366
```

# Exercise 4: Average of Array
Find the average between multiple numbers using reduce method.
```
const average = (...num) => num.reduce((a, b) => a + b) / num.length;

console.log(average(1, 2, 3, 4)); //  2.5
```

# Exercise 5: Smallest of Array
Get the Smallest Element of an Array
```
const getSmallest = arr => Math.min(...arr);

console.log(getSmallest([13, 7, 11, 3, 9, 15, 17])); // 3
```

# Exercise 6: Equal Arrays
Check if Two Arrays Contain the Same Values

```
const areEqual = (arr1, arr2) => arr1.length !== arr2.length ? false : parseInt(arr1.sort().toString().split(',').join('')) === parseInt(arr2.sort().toString().split(',').join(''));

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 1, 4, 2];
const arr3 = [1, 2, 3];

console.log(areEqual(arr1, arr2)); // true

console.log(areEqual(arr1, arr3)); // false
```

# Exercise 7: Random RGB Color
Create a function that generates a random rgb value. The outcome should be the same as we declare it in CSS : rgb(?, ?, ?)
```
const randomRGB = () => `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`;

console.log(randomRGB()); // "rgb(12, 210, 37)"
```

# Exercise 8: Letter Occurencies
Create a function that takes a string and a letter and counts how many times the letter appears in the string

```
const occurencies = (string, letter) => string.split('').filter((a) => a.includes(letter)).length;

console.log(occurencies("hello", "l")); // 2

console.log(occurencies("abracadabra", "a")); // 5

console.log(occurencies("oups", "z")); // 0
```

# Exercise 9: Sum of Positives
Create a function that returns the sum of all positive numbers in an array. (negative numbers should be ignored). If only negative numbers are present, it should return 0
```
const onlyPositives = (arr) => arr.filter((a) => a > 0).length < 1 ? 0 : arr.filter((a) => a > 0).reduce((a, b) => a + b);

console.log(onlyPositives([1, 6, 2, -3, 5, -12])); // 14

console.log(onlyPositives([-3, -4, -2])); // 0
```

# Exercise 10: Find in Array of Object
Create a function that takes an array of objects and an object with one key/value pair as arguments. The function should return every entries that are the same than the object.
```
const scanAndFind = (array, property) => array.filter(o => Object.entries(o).flat().includes(Object.entries(property).flat()[1]));

console.log(scanAndFind(
  [
    { firstName: "Vito",
      lastName: "Corleone",
    },
    { firstName: "Jon",
      lastName: "Snow",
    },
    { firstName: "Harry",
      lastName: "Potter",
    },
    { firstName: "Michal",
      lastName: "Corleone",
    },
  ],
  { lastName: "Corleone",}
));

// Result : [{firstName: Vito, lastName: Corleone}, {firstName: Michael, lastName: Corleone}]

console.log(scanAndFin(
  [
    { fullName: "Roi Baudoin", id: 49762 },
    { fullName: "Margareth Tatcher", id: 94357 },
    { fullName: "Barack Obama", id: 76458 },
    { fullName: "Emmanuel Macron", id: 10687 },
    { fullName: "Charles de Gaulle", id: 67098 },
    { fullName: "Boris Johnson", id: 16437 },
  ],
  { id: 10687 }
));
// Result : [{fullName: "Emmanuel Macron", id: 10687}]
```