//assume fetchDataOverApi returns data from extern
const fetchDataOverApi = require("../project/asynExample.js");

//non async example
test("the user data for user 1", () => {
  const data = fetchDataOverApi();
  expect(data).toBe("John");
});

//async example
test.only("the user data for user 1", async () => {
  const data = await fetchDataOverApi();
  expect(data).toBe("John");
});
