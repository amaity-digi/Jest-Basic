const addition = require("./BeforeEach");

beforeEach(()=> {
    console.log("Before each is running!")
})

test("Before ForEach test case", ()=>{
    expect(addition(10,20)).toBe(30);
})


test("Before ForEach test case1", ()=>{
    expect(addition(10,20)).toBe(30);
})

test("Before ForEach test case2", ()=>{
    expect(addition(10,20)).toBe(30);
})