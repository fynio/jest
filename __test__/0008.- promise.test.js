const getData = require("../src/promise");

// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://dragon-ball-api.herokuapp.com/api/character/goku";

it("deberia retornar la informacion de goku", () => {
  return getData(API).then((res) => {
    expect(res.data.name).toBe("goku");
  });
});

it("deberia de fallar la informacion de goku", () => {
  expect.assertions(1); // numero de espectativas que se ocuparan mas adelante
  return getData("asdasdasd").catch((err) => {
    expect(err).not.toBeNull();
  });
});
