// Implement Quick Sort
/*
Base Case:
if array.length is <= 1 return array

let pivot = array.shift()

let left
let right

forloop
  if el < pivot 
    left.push el
  if el > pivot
    right.push el

let leftSorted = quickSort(left)
let rightSorted = quickSort(right)

return leftSorted.concat(pivot).concat(rightSorted)



*/
function quickSort(array) {
  if (array.length <=1) return array;

  let pivot = array.shift()
  let left = [];
  let right = [];

  for(let i = 0; i < array.length; i++){
    let el = array[i];
    if(el < pivot) left.push(el);
    if(el > pivot) right.push(el);
  }

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return leftSorted.concat(pivot).concat(rightSorted)
}

let test = [32, 12, 4, 1, 0, 53, 9, 5]
console.log(quickSort(test));

module.exports = {
  quickSort
};
