//Julireto

//Función que te haga el flatten de un objeto, es decir,
//para fn({foo: {bar: 3}}) te escupa {'foo.bar': 3} y para
//fn({foo: [{bar: 3, yeah: 'hi']}}) te escupa {'foo.0.bar': 3, 'foo.1.yeah': 'hi'}

function flatten(obj) {
  let result = {};

  for (const i in obj) {
    if (typeof obj[i] === "object") {
      let auxObj = flatten(obj[i]);

      for (const j in auxObj) {
        result[`${i}.${j}`] = auxObj[j];
      }
    } else {
      result[i] = obj[i]; //nivel mas profundo de anidacion
    }
  }

  return result;
}

module.exports = { flatten };
