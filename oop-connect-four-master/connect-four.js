document.addEventListener("DOMContentLoaded", () => {
    let counter0 = 0;
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let counter5 = 0;
    let counter6 = 0;

    const col0 = document.getElementById('column-0');
    const col1 = document.getElementById('column-1');
    const col2 = document.getElementById('column-2');
    const col3 = document.getElementById('column-3');
    const col4 = document.getElementById('column-4');
    const col5 = document.getElementById('column-5');
    const col6 = document.getElementById('column-6');

    col0.addEventListener('click', event => {
      counter0++;
      if(counter0 >= 6){
        col0.setAttribute('class', 'full')
      }
    })
    col1.addEventListener('click', event => {
      counter1++;
      if(counter1 >= 6){
        col1.setAttribute('class', 'full')
      }
    })
    col2.addEventListener('click', event => {
      counter2++;
      if(counter2 >= 6){
        col2.setAttribute('class', 'full')
      }
    })
    col3.addEventListener('click', event => {
      counter3++;
      if(counter3 >= 6){
        col3.setAttribute('class', 'full')
      }
    })
    col4.addEventListener('click', event => {
      counter4++;
      if(counter4 >= 6){
        col4.setAttribute('class', 'full')
      }
    })
    col5.addEventListener('click', event => {
      counter5++;
      if(counter5 >= 6){
        col5.setAttribute('class', 'full')
      }
    })
    col6.addEventListener('click', event => {
      counter6++;
      if(counter6 >= 6){
        col6.setAttribute('class', 'full')
      }
    })

})
