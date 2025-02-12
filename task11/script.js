function firstCharacterToUpperCase(str) {
    if (!str) return str;
    return str.at(0).toUpperCase() + str.slice(1);
}

function strTrim(str, limitSize) {
    if (str.length <= limitSize) return str;
    while (!/[,.!?:; ]/.test(str.at(--limitSize))) {}
    return str.slice(0, limitSize) + "...";
}

function isSubStr(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
}

console.log(firstCharacterToUpperCase("hello, world!")); // Hello, world!
console.log(strTrim("Hello, world! Hello, world! Hello, world! Hello, world!", 40)); // Hello, world! Hello, world! Hello,...
console.log(isSubStr("Hello World!", "World")); // true
