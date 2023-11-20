const fetchData = require("./FetchData");

//Promises
test("User fetch name should be Leanne Graham", () => {
  expect.assertions(1);
  return fetchData().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// async await
test("User fetch name should be Leanne Graham with async await", async () => {
    expect.assertions(1);
    const data = await fetchData();
    expect(data.id).toEqual(1);
  });
