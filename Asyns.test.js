const AsynsFetch = require("./Asyns");

test("Asyn test case", async() => {
    const data = await AsynsFetch();
    expect(data).toBe("Resolved promises")
})