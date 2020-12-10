
export const getClue = function (){
  return fetch("https://jservice.xyz/api/random-clue")
    .then(res => res.json())
    .then(res =>{
      return res
    })
}
getClue()

