const fetchAPI = require("../src/callback");

// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://dragon-ball-api.herokuapp.com/api/character/goku";

it("deberia retornar la informacion de goku", (done) => {
  function callback(err, data) {
    try {
      expect(err).toBeNull();
      expect(data).not.toBeNull();
      expect(data.name).toBe("goku");
      done();
    } catch (err) {
      done(err);
    }
  }

  fetchAPI(API, callback);
});
