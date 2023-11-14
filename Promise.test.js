const  promises = require("./Promise"); 

test("promise resolve test case: ", () => {
    return promises().then((data) => {
        expect(data).toBe("Promise resolved")
    })
})

test("Promise Reject test case", () => {
    return promises().catch((error)=>{
        expect(error).toBe("Rejected")
    })
})