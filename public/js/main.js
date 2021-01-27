// Free CodeCamp OnlineCourse Session


  // for today the 23rd day of January, 2021
  // Fibonacci Numbers
function sumFibs(num){
	var prevNumber = 0;
	var currNumber = 1;
	var result = 0;
while(currNumber <= num){
		if(currNumber % 2 !== 0){
			result += currNumber;
		}
		currNumber += prevNumber;
		prevNumber = currNumber - prevNumber;
	}
	return result;
}
console.log(sumFibs(4))

// Flatten an Array

function flattenedArray(arr, con){
var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

console.log(flattenedArray([4]))


// to Translate from Binary to English
function binaryAgent(str){
	var biString = str.split(" ");
	var uniString = [];

	for (var i = 0; i < biString.length; i++){
		uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
	}
	return uniString.join("");

}

console.log(binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
