//Julireto

//Función que te haga el flatten de un objeto, es decir,
//para fn({foo: {bar: 3}}) te escupa {'foo.bar': 3} y para
//fn({foo: [{bar: 3, yeah: 'hi']}}) te escupa {'foo.0.bar': 3, 'foo.1.yeah': 'hi'}

function fn(obj) {
  let result = {};

  for (const i in obj) {
    if (typeof obj[i] === "object") {
      let auxObj = fn(obj[i]);
        result[`${i}.${j}`] = auxObj[j];
      }
    } else {
      result[i] = obj[i]; //nivel mas profundo de anidacion
    }
  }

  return result;
}

let input1 = { foo: { bar: 3 } }; // {'foo.bar': 3}
let input1b = { foo: [{ bar: 3 }] };
let input2 = {
  foo: [
    { bar: 3, yeah: "hi" },
    { bar: 1, yeah: "urg" },
  ],
};

let input3 = {
  city: "fuenla",
  foo: { bar: 3, yeah: { a: "a", b: "b", c: "c" } },
  heigth: "1,57",
};

console.log("------------------");
console.log(input1);
console.log(fn(input1));
console.log("------------------");
console.log(input1b);
console.log(fn(input1b));
console.log("------------------");
console.log(input2);
console.log(fn(input2));
console.log("------------------");
console.log(input3);
console.log(fn(input3));
console.log("------------------");
