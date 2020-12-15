// Implement Merge Sort
/*
[1,5,2,6,8,4,0,11]
[1,5,2,6]  [8,4,0,11]
[1, 5] [2,6]
[1] [5] [2] [6]
[1, 5] [2, 6]
[1, 2, 5, 6]

HELPER FUNC

function takes in an array
if array length is one or less than one, return array
split array into two arrays
n = array.length
array 1 is from array[0] to n/2
array 2 is from array[n/2 + 1] to array[n]
recurse with array1, recurse with array2

MERGE

takes two arrs
declare new empty arr
while a and b .length > 0
if a[0] > b[0] add b[0] to newArr
b.shift()
else add a[0] to newARr
a.shift()

while a.length > 0
add a[0] to result, remove a[0] from a

while b.length > 0
add b[0] to result, remove b[0] from b

return result, bye bye

base case: if array.lenth === 1
            if array.length === 0 return array

            gimmet two arrays from this array
            send em through merge

recursive case: if array.length > 1
recursive step: split? 
repeating pattern: mergesort(el2) mergesort(el1)
pattern breaks when: 


*/

function merge(left, right) {
  let result = [];
  
  while(left.length > 0 && right.length > 0) {
    if(left[0] > right[0]) {
      let min = right.shift();
      result.push(min);
    } else {
      let min = left.shift();
      result.push(min);
    }
  }
  while(left.length > 0) {
    let el = left.shift();
    result.push(el)
  }
  while(right.length > 0) {
    let el = right.shift();
    result.push(el);
  }
  return result;
}

function mergeSort(array) {
  if(array.length === 1) {
    return array;
  }

  let left = array.slice(0, array.length /2);
  let right = array.slice(array.length / 2);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);

}

let test = [3,6,5,2,42,7,5,48,66,4];
console.log(mergeSort(test));

module.exports = {
  merge,
  mergeSort
};
