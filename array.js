"use strict";

// Maximum subarray sum (30 mins)

// Write a method that finds the maximum sum of a contiguous subsequence in an
// array or list of integers:
//
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
//
// should be 6: [4, -1, 2, 1]
//
// Easy case is when the list is made up of only positive numbers and the
// maximum sum is the sum of the whole array. If the list is made up of only
// negative numbers, return 0 instead.
//
// Empty list is considered to have zero greatest sum.
// Note that the empty list or array is also a valid sublist/subarray.

class maxSequence {
  constructor(arr) {
    this.arr = arr;

    let result = this.calcSequence(this.arr);

    this._subArray = result.array;
    this._total = result.total;
  }

  sumArray(arr) {
    return arr.reduce((total, element) => total + element);
  }

  isNull(arr) {
    return arr === [];
  }

  isNegative(arr) {
    //La suma total sería negativa, igual sobra este método
    return !arr.some((element) => element > 0);
  }

  isPositive(arr) {
    return arr.every((element) => element > 0);
  }

  calcSequence(arr) {
    //reducir las iteraciones sobre el mismo array

    let resultMatrix = { total: 0, array: arr };

    if (this.isNull(arr) || this.isNegative(arr)) {
      return resultMatrix;
    }

    if (this.isPositive(arr)) {
      resultMatrix.total = this.sumArray(arr);
      return resultMatrix;
    }

    let arrLength = arr.length;
    let subArray = [];
    let sum = 0;

    for (var i = 0; i <= arrLength; i++) {
      for (var j = i + 1; j <= arrLength; j++) {
        subArray = arr.slice(i, j);
        sum = this.sumArray(subArray);

        if (sum > resultMatrix.total) {
          resultMatrix.total = sum;
          resultMatrix.array = subArray;
        }
      }
    }
    return resultMatrix;
  }

  get subArray() {
    return this._subArray;
  }

  get total() {
    return this._total;
  }
}

module.exports = maxSequence;
