import { getClue as getClueFromPromise } from './promise-version.js';

document.addEventListener(('DOMContentLoaded'), () => {
    
const usePromise = document.getElementById("use-promise")
usePromise.addEventListener('click', () => {
  getClueFromPromise()
    .then(res => {
      
      document.getElementById('question').innerHTML = res.question;
      
      document.getElementById('answer').innerHTML = res.answer;

      document.getElementById('value').innerHTML = res.value;

      document.getElementById('category-title').innerHTML = res.category.title;

      const invalidCount = document.getElementById('invalid-count')
      
      if(res.invalid_count !== undefined && res.invalid_count > 0){
        invalidCount.innerHTML = 'invalid'
      }else invalidCount.innerHTML = 'valid';
    })
    .catch(res => console.error('Error:',res.message))
})



})
