"use strict";

// Prime tester (45 mins)

// A prime number (or a prime) is a natural number greater than 1,
// that has no positive divisors other than 1 and itself.
// Write a function that accepts a number and returns a boolean
// reflecting whether the input number is a prime or not.

// Extra credit: Write a function that takes two numbers and returns an array
// of all prime numbers between that range. If you're not quite sure where to start,
// check out the Sieve of Eratosthenes, or the Sieve of Atkin on Wikipedia.

function primeTester(n) {
  if (n < 2) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

//function primeList(start, end) {}

//exports.tester = primeTester;
//exports.list = primeList;

module.exports = { primeTester };
