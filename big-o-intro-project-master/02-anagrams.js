
function firstAnagram(str1, str2) {
  if(str1.length !== str2.length) return false
  for(let i = 0; i < str1.length; i++){

    let index1 = str1.indexOf(str2[i])
    let index2 = str2.indexOf(str1[i])

    if(index1 === -1) return false
    if(index2 === -1) return false
  }
  return true
}

// console.log(firstAnagram('livee', 'elvis'))


let secondAnagram = (str1, str2) => str1.split('').sort().join('') === str2.split('').sort().join('');



// {
//   let string1 = str1.split('').sort().join('')
//   let string2 = str2.split('').sort().join('')
//   if(string1 === string2) return true;
//   return false
//   // console.log(str2.sort())
// }

// console.log(secondAnagram('livee', 'elvis'))

function thirdAnagram(str1, str2) {
	let obj1 = {};
	let obj2 = {};

	let arr1 = str1.split('');
	let arr2 = str2.split('');

	for (let i = 0; i < arr1.length; i++) {
		let key = arr1[i];
		let key2 = arr2[i];
		if (!(key in obj1 && key2 in obj2)) {
			obj1[key] = 1;
			obj2[key2] = 1;
		} else {
			obj1.key++;
			obj2.key++;
		}
	}
	let values1 = Object.values(obj1);
  let values2 = Object.values(obj2);



  // let index1 = str1.indexOf(str2[i])
  // let index2 = str2.indexOf(str1[i])

  // if(index1 === -1) return false
  // if(index2 === -1) return false
	// console.log('this is obj1: ', obj1,'\n this is obj 2:', obj2)
}
console.log(thirdAnagram('taco', 'coat'))

function fourthAnagram(str1, str2) {
  // Code goes here ....
}
