// // Implement Insertion Sort
// base case = when our sorted list is the list of original list
// - way to check
// recursive case = when our sorted list is less than length of original list

// repeating pattern is going to compare an ele with a prev ele and swap if necissary

// pattern will break when the whole array is sorted

const insertionSort = array => {
	for(let i = 0; i < array.length; i++){

		for(let j = i + 1; j < array.length; j++){
			let el = array[i];
			let el1 = array[j];
			if(el1 < el){
				array[i] = el1;
				array[j] = el;

 			}
		}
	}
	return array;
}















let test = [21,2,1,3,4,5,4,67,0]
console.log(insertionSort(test))

module.exports = {
	insertionSort,
};








// recusive step will call our function on sliced list

// function insertionSort(list) {
  
//   if (list.length === 0) return list;
//   //if our list is less than OR equal to 1 return our list
// 	// if (sorted.length === list.length) return sorted;
  
// 	let firstEl = list[1];
// 	let el = list[0];
  
// 	if (firstEl < el) {
//     list[1] = el;
// 		list[0] = firstEl;
//   }

  
//   if(firstEl === list[list.length-1]) return list;
//   return insertionSort(list.slice(1))

// }