// Implement Bubble Sort
// compare first two ele
// swap if needed
//compare next two eles
//keep looping until it has no values to swap
//


function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  for(let i = 0; i < array.length; i++){
    
    for(let j = 0; j < array.length -1; j++){
      let el1 = array[j];
      let el2 = array[j + 1];

      if(el2 < el1){
        array[j] = el2;
        array[j + 1] = el1;
      }
    }
  }
  return array;
}

let test = [5,4,3,2,1];
let test2 = [3,11,2,1,0,15,-1]

console.log(bubbleSort(test))
console.log(bubbleSort(test2))
module.exports = {
  bubbleSort,
  swap
};
