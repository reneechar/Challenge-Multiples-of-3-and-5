/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */

exports.sumOfAMultiple = function( n ) {
  var sum = 0;
  var counter = 3;
  while (counter < n) {
  	if (counter%3 === 0) {
  		sum += counter;
  	} else if (counter%5 ===0) {
  		sum += counter;
  	}
    counter++
  }

  console.log(sum);
  return sum;
};

