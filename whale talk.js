let input = "your so wrong";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i += 1) {
  // console.log("i is " + i);
  for (let j = 0; j < vowels.length; j += 1) {
    // console.log("j is " + j);
    if (input[i] === vowels[j]) {
      if (input[i] === "e") {
       resultArray.push(input[i]) {
         if (vowels[j] === "u") {
      resultArray.push(vowels[j]) {
        
      }
       }
    
    }
     
  }
    }
  }
}
console.log(resultArray.join(" ").toUpperCase());