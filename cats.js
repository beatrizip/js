import fetch from "node-fetch"; //npm install node-fetch

function getCatsFacts() {
  const url = "https://catfact.ninja/facts";

  return fetch(url) //fetch devuelve una promesa
    .then((response) => response.json())
    .then((cats) => {
      let fact = cats.data[0].fact;
      let words = fact.split(" ");
      return words.slice(" ", 3).join(" ");
    })
    .catch((error) => {
      console.error(error);
    });
}

/*
async function getCatImage() {
  //Una funcion async defuelve también una promesa
  const url = "";
  let catFacts = await getCatsFacts();
  return catFacts;
}
*/

function getCatsImage(fact) {
  let urlFact = fact.replaceAll(" ", "%20");
  let url = `https://cataas.com/cat/says/${urlFact}`;
  return url;
}

getCatsFacts()
  .then((fact) => {
    return getCatsImage(fact);
  })
  .then((image) => console.log(image))
  .catch((error) => console.log(error));

module.exports = { getCatsFacts, getCatsImage };
