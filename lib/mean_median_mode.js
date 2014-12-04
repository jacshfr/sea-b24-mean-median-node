'use strict';

var MeanMedianMode = function() {

  this.mean = function(array) { //average of all nums
    var sum = array.reduce(function(a, b) { //finds sum of all integers
      return a + b;
    });
    return (sum / array.length); //divides sum by amount of integers
  };

  this.median = function(array) { //in sorted ascending or descending, the middle most integer
    var length;
    var x;
    var y;
    var midNum;
    length = array.length;
    array.sort(function(a, b) {//sorts array in ascending order
      return a - b;
    });
    midNum = (length / 2) - 1;
    if (length % 2 !== 0) {//checks if length is even
      return array[ Math.ceil(midNum) ];//if odd return midNum
    } else {
      x = array[midNum];
      y = array[midNum + 1];
      return ((x + y) / 2); //if even take avg of two middle integers
    }
  };

  this.mode = function(array) { //the num that is repeated the most
    var counter = 1; //keeps track of how many times integer with most appearances
    var mapOfArgs = {};//has appeared
    var finalMode = [];
    for (var l = 0; l < array.length; l++) {//maps args based on how often
      if (mapOfArgs[array[l]]) {            //they appear
        mapOfArgs[array[l]]++;
        if (mapOfArgs[array[l]] > counter) {
          counter++;
        }
        array[l] = null;
      } else {
        mapOfArgs[array[l]] = 1;
      }
    }
    for (var x = 0; x < array.length; x++) {//pushes to array based on how many times
      if (mapOfArgs[array[x]] === counter) {//integer appears compared to counter
        finalMode.push(array[x]);
      }
    }
    return finalMode;
  };

};

var mmm = new MeanMedianMode();
module.exports = mmm;
