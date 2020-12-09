const getClue = function (){
  return fetch("https://jservice.xyz/api/random-clue")
    .then(res => {
      if (res.ok !== true) {
        return Error(res.status)
      }
      return res.json()
    })
    .then(res => res)
}
getClue()

export { getClue }