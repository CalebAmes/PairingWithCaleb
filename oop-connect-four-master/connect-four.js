document.addEventListener("DOMContentLoaded", () => {
    let counter0 = 5;
    let counter1 = 5;
    let counter2 = 5;
    let counter3 = 5;
    let counter4 = 5;
    let counter5 = 5;
    let counter6 = 5;
    let clickTargetCounter = 1;

    const col0 = document.getElementById('column-0');
    const col1 = document.getElementById('column-1');
    const col2 = document.getElementById('column-2');
    const col3 = document.getElementById('column-3');
    const col4 = document.getElementById('column-4');
    const col5 = document.getElementById('column-5');
    const col6 = document.getElementById('column-6');

    col0.addEventListener('click', event => {
      if(counter0 <= 0){
        col0.setAttribute('class', 'full')
      }
      let square = document.getElementById(`square-${counter0}-0`)
      if (clickTargetCounter % 2 === 0) {
        square.classList.add("token");
        square.classList.add("red");

    }else{
        square.classList.add("token");
        square.classList.add("black");

      }
      counter0--;
    })

    col1.addEventListener('click', event => {
      if(counter1 <= 0){
        col1.setAttribute('class', 'full')
      }
      let square = document.getElementById(`square-${counter1}-1`)
      if (clickTargetCounter % 2 === 0) {
        square.classList.add("token");
        square.classList.add("red");

    }else{
        square.classList.add("token");
        square.classList.add("black");

      }
      counter1--;
    })

    col2.addEventListener('click', event => {
      if(counter2 <= 0){
        col2.setAttribute('class', 'full')
      }
      let square = document.getElementById(`square-${counter2}-2`)
      if (clickTargetCounter % 2 === 0) {
        square.classList.add("token");
        square.classList.add("red");

    }else{
        square.classList.add("token");
        square.classList.add("black");

      }
      counter2--;
    })

    col3.addEventListener('click', event => {
      if(counter3 <= 0){
        col3.setAttribute('class', 'full')
      }
      let square = document.getElementById(`square-${counter3}-3`)
      if (clickTargetCounter % 2 === 0) {
        square.classList.add("token");
        square.classList.add("red");

    }else{
        square.classList.add("token");
        square.classList.add("black");

      }
      counter3--;
    })

    col4.addEventListener('click', event => {
      if(counter4 <= 0){
        col4.setAttribute('class', 'full')
      }
      let square = document.getElementById(`square-${counter4}-4`)
      if (clickTargetCounter % 2 === 0) {
        square.classList.add("token");
        square.classList.add("red");

    }else{
        square.classList.add("token");
        square.classList.add("black");

      }
      counter4--;
    })

    col5.addEventListener('click', event => {
      if(counter5 <= 0){
        col5.setAttribute('class', 'full')
      }
      let square = document.getElementById(`square-${counter5}-5`)
      if (clickTargetCounter % 2 === 0) {
        square.classList.add("token");
        square.classList.add("red");

    }else{
        square.classList.add("token");
        square.classList.add("black");

      }
      counter5--;
    })

    col6.addEventListener('click', event => {
      if(counter6 <= 0){
        col6.setAttribute('class', 'full')
      }
      let square = document.getElementById(`square-${counter6}-6`)
      if (clickTargetCounter % 2 === 0) {
        square.classList.add("token");
        square.classList.add("red");

    }else{
        square.classList.add("token");
        square.classList.add("black");

      }
      counter6--;
    })

    const clickTargets = document.getElementById("click-targets")
    clickTargets.classList.add("black")

    clickTargets.addEventListener('click', event => {
        if (clickTargetCounter % 2 !== 0) {
            clickTargets.classList.remove("black");
            clickTargets.classList.add("red");

        }else{
            clickTargets.classList.remove("red");
            clickTargets.classList.add("black");

        }
        clickTargetCounter++
    })
    // const boardSqs = document.querySelectorAll('.token-square');
    // boardSqs.addEventListener('click', event => {
    //   boardSqs.forEach(boardSq => {
    //     let newDiv = document.createElement('div');
    //     newDiv.classList.add('token','red');
    //     boardSq.appendChild(newDiv);
    //   })
    // })
})
