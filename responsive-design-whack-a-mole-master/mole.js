// Write your JS here.
window.addEventListener('DOMContentLoaded', () => {

  // setInterval(() => {
  //   const moleHeads = document.querySelectorAll('.wgs__mole-head');
  //   for (let moleHead of moleHeads) {
  //     moleHead.classList.toggle('wgs__mole-head--hidden');
  //   }
  // }, 1000);

  const popUpRandomMole = () => {
    let moles = document.getElementsByClassName('wgs');
    let random = Math.floor(Math.random() * 7);
    moles[random].innerHTML = `<div class="wgs">
    <img src = "mole-head.png" class="wgs__mole-head ">
    <img src = "mole-hill.png" class="wgs__dirt-pile"> 
  </div>`;
  }
  popUpRandomMole()
// let random = Math.floor(Math.random()*7);
})