const cats = require("./catsAxios");
const axios = require("axios");
const httpMock = require("@s-ui/mockmock");

// Mock any requests
const mocker = new httpMock.HttpMocker();
mocker
  .httpMock("http://fake.api.com")
  .get("/my-service")
  .reply({ property: "value" }, 200);

// Make your requests
axios
  .get("http://fake.api.com/my-service")
  .then((response) => console.log(response)); // { property: 'value' }

describe("the cats function", () => {
  //validar url??
  it("sould return an cat url", async () => {
    let cat = await cats.getCats();
    console.log(cat);
    expect(cat).not.toBeNull;
  });
});

//que funcione el api de facts (aparece un texto)
//que funcione el api de imagenes si ha funcionado el api de facts (aparece una imagen)

/*
describe("the getStockValue function", () => {
  it("returns false if no data is returned by the API", async () => {
    global.fetch = jest.fn(() => {
      Promise.resolve();
    });
    const value = await getCatsFacts();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(value).toBe(false);
  });
});*/
