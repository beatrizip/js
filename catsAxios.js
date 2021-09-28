const axios = require("axios").default; //npm install axios

function getCatsFacts() {
  const url = "https://catfact.ninja/facts";

  return axios(url)
    .then((cats) => {
      let fact = cats.data.data[0].fact;
      let words = fact.split(" ");
      return words.slice(" ", 3).join(" ");
    })
    .catch(() => console.log("error"));
}

function getCatsImage(fact) {
  let urlFact = fact.replaceAll(" ", "%20");
  let url = `https://cataas.com/cat/says/${urlFact}`;
  return url;
}

function getCats() {
  return getCatsFacts()
    .then((fact) => {
      return getCatsImage(fact);
    })
    .catch(() => console.log("error"));
}

getCats();
module.exports = { getCatsFacts, getCatsImage, getCats };
