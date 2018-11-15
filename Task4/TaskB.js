//A)
console.log("Function calculating the factorial of a number. Do this using recursion and iteration. Create recursive function using function expression, iterative function using function declaration");
var factorial = function (n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));

function factorialize(num) {
    var factorial = 1;
    for (var i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorialize(5));

//B)
console.log("Function calculating nth number in Fibonacci sequence.");
function fibonacci(num) {
    var a = 1, b = 0, temp;
    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
}
console.log(fibonacci(6));

//C)	
console.log("Write a JavaScript function that checks whether a passed string is palindrome or not");
function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

console.log(checkPalindrom("aba"));

//D)
console.log("Write a JavaScript function that returns a passed string with letters in alphabetical order. => Example string : 'webmaster' =>  Expected Output : 'abeemrstw'");
function alphaberSort(str) {
    var x = str.split("");
    return x.sort().join("");
}
console.log(alphaberSort("webmaster"));

//E)
console.log("Write a JavaScript function that accepts a string as a parameter and find the longest word within the string");
function longest_string(str_ara) {
    var max = str_ara[0].length;
    str_ara.map(v => max = Math.max(max, v.length));
    result = str_ara.filter(v => v.length == max);
    return result;
}

console.log(longest_string(['a', 'aa', 'deneme', 'aaaaa', 'aaaa']))
//F)	
console.log("Write a JavaScript function that accepts a number as a parameter and check the number is prime or not");
function test_prime(n) {

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(test_prime(37));
//G)	
console.log("Write a JavaScript function which accepts an argument and returns the type");
function detect_data_type(value) {
    var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;

    if (typeof value === "object" || typeof value === "function") {
        for (x = 0, len = dtypes.length; x < len; x++) {
            if (value instanceof dtypes[x]) {
                return dtypes[x];
            }
        }
    }
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('w3resource'));
console.log(detect_data_type(false));

//H)	
console.log("Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.");
function Second_Greatest_Lowest(arr_num) {
    arr_num.sort(function (x, y) {
        return x - y;
    });
    var uniqa = [arr_num[0]];
    var result = [];

    for (var j = 1; j < arr_num.length; j++) {
        if (arr_num[j - 1] !== arr_num[j]) {
            uniqa.push(arr_num[j]);
        }
    }
    result.push(uniqa[1], uniqa[uniqa.length - 2]);
    return result.join(',');
}

console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5]));

//I)	
//Sample function : amountTocoins(46, [25, 10, 5, 2, 1]) 
//Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
//Output : 25, 10, 10, 1
console.log("Write a JavaScript function to convert an amount of money to coins.");
function amountTocoins(amount, coins) {
    if (amount === 0) {
        return [];
    }
    else {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat(amountTocoins(left, coins));
        }
        else {
            coins.shift();
            return amountTocoins(amount, coins);
        }
    }
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));


//J)	
console.log("Write a JavaScript program for binary search.");
function binary_Search(items, value) {
    var firstIndex = 0,
        lastIndex = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    while (items[middleIndex] != value && firstIndex < lastIndex) {
        if (value < items[middleIndex]) {
            lastIndex = middleIndex - 1;
        }
        else if (value > items[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }

    return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));
console.log(binary_Search(items, 5));
