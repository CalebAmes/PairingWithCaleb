const fetch = require('node-fetch');

const getClue = function (){
  return fetch("https://jservice.xyz/api/random-clue")
    .then(res => res.json())
    .then(res =>{
      console.log(res)
    })
}
getClue()

export{getClue}