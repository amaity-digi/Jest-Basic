const sum = require("./Sum");

describe("example test", () => {
    it("should add 1 + 2 equal 3", () => {
        const result = sum(10, 20);
        expect(result).toBe(30);
    })

    // How to test Object
    it("object assigment", () => {
        const obj = {};
        expect(obj).toEqual({}); // When ever we have array or object we should go for toEqual method
    })
})

describe("truthy or falsey", () => {
   it("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).not.toBeTruthy();
   })

   test("floating value", () => {
    const floatValue = 0.1 + 0.2; 
    // expect(floatValue).toBe(0.3); //   This won't work because of rounding error
    expect(floatValue).toBeCloseTo(0.3);
   })
   test("test 2 + 2", ()=> {
    const val = 2 + 2;
    expect(val).toBeGreaterThan(3);
    expect(val).toBeGreaterThanOrEqual(4);
    expect(val).toBeLessThan(5);
   })
})

