test("2 + 2 = 4", () => {
  expect(2 + 2).toBe(4);
});

test("Object validacion", () => {
  const json = {
    usuario: [
      {
        name: "rodrigo",
      },
      {
        name: "rodrigo",
      },
    ],
  };

  for (i = 0; i <= 1; i++) {
    expect(json.usuario[i].name).toEqual("rodrigo");
  }
  expect(json.usuario[0].name).toEqual("rodrigo");
  expect(json.usuario[0].name).not.toEqual("rosdrigo");

  const data = { username: "Rodrigo" };
  const data2 = { username: "Ro" };
  expect(data).toEqual({ username: "Rodrigo" });
  expect(data).not.toEqual({ username: "Ro" });
});
