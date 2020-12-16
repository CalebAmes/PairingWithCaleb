const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
  'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];
function quadraticBiggestFish(fishes) {
 for(let i = 0; i < fishes.length; i++){
   let el1 = fishes[i]
   let counter = 0
   for(let j = 0; j < fishes.length; j++){
     let el2 = fishes[i]
   }
 }
}



function nlognBiggestFish(fishes) {
  // Code goes here ...
  let newArr = fishes.sort((a, b)=> a.length - b.length);
  console.log(newArr);
  return newArr[newArr.length -1];
}

console.log(nlognBiggestFish(fishies))

function linearBiggestFish(fishes) {
  let result = ''
  for (let i = 0; i < fishes.length; i++) {
    let el = fishes[i]
    if (el.length > result.length) {
      result = el
    }
  }
  return result
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
}


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  // Code goes here ...
}
