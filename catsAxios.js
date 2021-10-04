const axios = require("axios").default; //npm install axios

function getCatsFacts() {
  const url = "https://catfact.ninja/facts";
  let words = [];

  return axios(url)
    .then(({ data: cats }) => {
      let { data: catFacts } = cats;
      let fact = catFacts[0].fact;
      words = fact.split(" ");
      return words.slice(" ", 3).join(" ");
    })
    .catch((error) => {
      console.log(`Error(Cat facts): ${error}`);
      return words;
    });
}

function catsFactError() {
  let error = new Error("Cats fact is empty");
  return error;
}

function getCatsImage(fact) {
  let url;
  try {
    if (fact.length === 0) {
      url = "";
      throw new catsFactError();
    }
    let urlFact = fact.replaceAll(" ", "%20");
    url = `https://cataas.com/cat/says/${urlFact}`;
    return url;
  } catch (error) {
    console.log(`Error(Cat image): ${error}`);
  }
}

function getCats() {
  return getCatsFacts()
    .then((fact) => {
      return getCatsImage(fact);
    })
    .catch((error) => {
      console.log(`Error Cats: ${error}`);
    });
}

//getCats();

module.exports = { getCatsFacts, getCatsImage, getCats };
