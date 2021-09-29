const cats = require("./catsAxios");
const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const BASE_URL = "https://catfact.ninja";

describe("cats facts", () => {
  const mock = new MockAdapter(axios);

  describe("when API catfacts is successful", () => {
    it("should return facts list", async () => {
      // given
      const facts = { facts: ["cat 1 bla", "cat 2 ble"] };
      mock
        .onGet(`${BASE_URL}/facts`)
        .reply(200, { facts: ["cat 1 bla", "cat 2 ble"] });

      // when
      const result = await cats.getCatsFacts();

      // then
      expect(result.data).toEqual(facts);
    });
  });
});
