import { getClue as getClueFromPromise } from './promise-version.js';
import { getClue as getClueFromAsyncFunction } from './async-await-version.js'

document.addEventListener(('DOMContentLoaded'), () => {
getClueFromAsyncFunction()
// console.log(getClueFromPromise())
const changeInnerHTML = (clue)=>{
  document.getElementById('question').innerHTML = clue.question;
      
      document.getElementById('answer').innerHTML = clue.answer;

      document.getElementById('value').innerHTML = clue.value;

      document.getElementById('category-title').innerHTML = clue.category.title;

      const invalidCount = document.getElementById('invalid-count')
      
      if(clue.invalid_count !== undefined && clue.invalid_count > 0){
        invalidCount.innerHTML = 'invalid'
      }else invalidCount.innerHTML = 'valid';
}
const usePromise = document.getElementById("use-promise")
usePromise.addEventListener('click', () => {
  getClueFromPromise()
    .then(changeInnerHTML)
    .catch(clue => console.error('Error:',clue.message))
})

const asyncBtn = document.getElementById("use-async-await")
  
asyncBtn.addEventListener("click", async () => {
  try {
    const value = await getClueFromAsyncFunction()
    changeInnerHTML(value)
  } catch (error) {
    console.error(error.message)
  }
})

})
