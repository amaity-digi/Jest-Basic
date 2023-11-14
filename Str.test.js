const string = require("./Str");

// test("string test case", () => {
//     expect(string("Hello World!")).toMatch("Hello World!");
// })

test("string negative test case", () => {
    expect(string).not.toMatch("Hello World!");
})