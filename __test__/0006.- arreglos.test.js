const { carsList, brandlist } = require("../src/arrays");

describe("validando_arreglos", () => {
  test("que contenga no sea null", () => {
    expect(carsList()).not.toBeNull();
  });

  test("que contenga Goku", () => {
    expect(carsList()).toContain("Goku");
  });

  test("que contenga Goku", () => {
    expect(new Set(carsList())).toContain("Goku");
  });

  test("que contenga un elemento", () => {
    expect(carsList()).toHaveLength(2);
  });

  test("que contenga no sea null", () => {
    expect(brandlist()).not.toBeNull();
  });

  test("que contenga Goku", () => {
    expect(brandlist()).toContain("sayayin");
  });

  test("que contenga Goku", () => {
    expect(new Set(brandlist())).toContain("sayayin");
  });

  test("que contenga un elemento", () => {
    expect(brandlist()).toHaveLength(2);
  });
});
