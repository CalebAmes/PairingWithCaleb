// Implement Selection Sort
/*
find the smallest value in array
helper function findMin
coutner that starts at 0, our index for each iteration
compare array[counter] iwth array[i]

*/
// Implement swap without looking at bubble sort

const min = (array) => {
  let mindex = 0;
  for (let i = 1; i < array.length; i++) {
    if(array[mindex] > array[i]) {
      mindex = i;
      //array[mindex] = array[i];
    }
  }
  return mindex;
}

function swap(arr, index1, index2) {
  let val1 = arr[index1];
  let val2 = arr[index2];
  arr[index1] = val2;
  arr[index2] = val1;
  return arr;
}

function selectionSort(list) {
  for(let i = 0; i < list.length; i++) {
    // let mindex = min(list.slice(1));
    let mindex = i;
    for (let j = i + 1; j < list.length; j++) {
      if(list[mindex] > list[j]) {
        mindex = j;
      }
    }
    swap(list, i, mindex);
  }
  return list;
}


let test = [2,45,4,7,42,12,9];
// function tester(arr) {
//   arr[3] = "hello";
//   return arr;
// }



// console.log(tester(test));
console.log(selectionSort(test));

module.exports = {
  selectionSort,
  swap
};
//};
