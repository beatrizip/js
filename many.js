// Many invocations (20 mins)

// Write a function that adds from many invocations,
// until it sees an empty invocation. If the first
// invocation is empty it should return undefined.
// For example:
// addMany(3)(4)(1)(7)() -> 15
// addMany() -> undefined

function addMany(num) {
  if (num === undefined) return undefined;

  return function func(x) {
    if (typeof x !== "undefined") {
      num = num + x;
      return func;
    } else {
      return num;
    }
  };
}

module.exports = { addMany };
