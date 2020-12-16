
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

console.log(firstAnagram('livee', 'elvis'))

function secondAnagram(str1, str2) {
  // Code goes here ....
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
