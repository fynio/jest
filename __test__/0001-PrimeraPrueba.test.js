const sum = require("../src/sum");

describe("Bloque de pruebas para la funcion sum ", () => {
  it("prueba1: 1 + 1 is 2 ", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
