function anagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let a = str1.toLowerCase();
    let b = str2.toLowerCase();
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");
    return a = b;
}

console.log((anagram("listen", "silent")));

module.exports = anagram;