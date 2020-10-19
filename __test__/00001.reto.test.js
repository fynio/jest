const twoSum = require("./../src/sumadenumeros.js");

let arreglo = [3, 3, 3];
let target = 6;

it("se espera que sea [0,1] ", () => {
  expect(twoSum(arreglo, target)).toBe("0,1");
});
