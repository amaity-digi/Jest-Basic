const isAnagram = require("./Anagram");

// beforeEach(() => {
//     console.log("DataBase Initialized!")
// });
// afterEach(() => {
//     console.log("DataBase closed!")
// });

// beforeAll(() => {
//     console.log("DataBase Initialized!")
// });
// afterAll(() => {
//     console.log("DataBase closed!")
// });


describe("Cheking name", () =>{
   beforeEach(() => {
    console.log("Checking Name....");
   })

   test("user is Sai", () => {
    const user = "Sai";
    expect(user).toBe("Sai");
   });
   
   test("user is Vivek", () => {
    const user = "Vivek";
    expect(user).toEqual("Vivek");
   });

   test("user is Moniskha", () => {
    const user = "Moniskha";
    expect(user).toMatch(/Moniskha/);
   });

})

test(("isAnagram function exits"), () => {
    expect(isAnagram).toBeDefined();
});


test(("listen is an anagram of silent"), () => {
    expect(isAnagram("silent", "listen")).toBeTruthy();
});


test(("anagram of checking length"), () => {
    const word1 = "silent";
    const word2 = "listen";
    expect(word1).toHaveLength(word2.length);
    expect(isAnagram("silent", "listen")).toBeTruthy();
});