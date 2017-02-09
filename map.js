var words = ["ground", "control", "to", "major", "tom"];

function map(arr, fn){
  var newArray = [];
  arr.forEach(x => {
    var y = fn(x);
    newArray.push(y);
  });
  return newArray;
}

var mapped = map(words, function(word) {
  return word.length;
});

console.log(mapped);