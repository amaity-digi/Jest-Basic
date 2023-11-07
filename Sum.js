function Sum(num1, num2){
    return num1 + num2;
}

// inside if() we can pass "", null, 0 it is negative means returning false value.
// If we can pass "something", true inside if(), then it will return true value.
if(null){
    console.log("It's a true value");
}else{
    console.log("It's a falsy value");
}

module.exports = Sum;