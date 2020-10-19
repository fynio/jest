describe("validando strings", () => {
  test("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect("Christoph").toMatch(/stop/);
  });

  test("validando correos", () => {
    var re = /\S+@\S+\.\S+/;
    expect("rodrigo@gmail.com").toMatch(re);
  });

  test("validando correos", () => {
    var re = /\S+@\S+\.\S+/;
    expect("rodrigo@gmail.com").toMatch(re);
  });
});
