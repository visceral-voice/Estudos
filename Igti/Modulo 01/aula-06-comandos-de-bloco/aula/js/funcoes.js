function sum(a, b){
  return a + b;
}
console.log(sum(5,7));

function compareNumbers(a, b){
  //return a > b ? 1 : a < b ? -1 : 0;
  return a-b;
}
console.log(compareNumbers(5,2));
console.log(compareNumbers(5,5));
console.log(compareNumbers(2,5));

function superSum(from, upTo){
  var sum = 0;
  for(i = from; i <= upTo; i++){
    sum += i;
  }
  return sum;
}
console.log(superSum(1,10));
console.log(superSum(9,200));
console.log(superSum(200,10000));
