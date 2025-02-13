const additionOperation = function(a, b) {
    return a + b;
}

const subtractionOperation = function(a, b) {
    return a - b;
}

const multiplicationOperation = function(a, b) {
    return a * b;
}

const divisionOperation = function(a, b) {
    return a / b;
}

const operations = {
    add: additionOperation,
    subtract: subtractionOperation,
    multiply: multiplicationOperation,
    divide: divisionOperation,
};

function calculate(a, b, operation) {
    return operation(a, b);
}

console.log(calculate(5, 2, operations['add'])); // 7
console.log(calculate(10, 4, operations['subtract'])); // 6
console.log(calculate(6, 3, operations['multiply'])); // 18
console.log(calculate(8, 2, operations['divide'])); // 4
