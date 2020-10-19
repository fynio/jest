const getData = require("../src/promise");

const API = "https://dragon-ball-api.herokuapp.com/api/character/goku";

it("deberia de retornar la informacion de goku ", async () => {
  const response = await getData(API);

  expect(response.data.name).toBe("goku");
});

it("deberia de fallar la informacion de goku ", async () => {
  // esperamos un expect
  expect.assertions(1);
  try {
    // metemos texto para que falle
    await getData("dfgdgf");
  } catch (err) {
    expect(err).not.toBe();
  }
});
