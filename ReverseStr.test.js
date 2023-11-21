const revreseStr = require("./RevereseStr");

test(("revreser string function exits"), () => {
    expect(revreseStr).toBeDefined();
});

test(("string Reverse"), () => {
    expect(revreseStr("Hello")).toEqual("olleh");
})