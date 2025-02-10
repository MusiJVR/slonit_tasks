function sumNumbersFromObject(obj) {
    return Object.values(obj)
        .filter(value => typeof value === 'number')
        .reduce((sum, num) => sum + num, 0);
}

function sortedNumericFieldNames(obj) {
    return Object.entries(obj)
        .filter(([key, value]) => typeof value === 'number')
        .sort((a, b) => b[1] - a[1])
        .map(([key]) => key);
}

let obj = {name: 'Vasya', friends: 5, likes: 19, projects: 7};

console.log(sumNumbersFromObject(obj)); // 31
console.log(sortedNumericFieldNames(obj)); // [ 'likes', 'projects', 'friends' ]
