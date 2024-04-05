// let button1 = document.querySelector("#btn");
// let button2 = document.querySelector("#btn2");
// let title = document.querySelector("#title");

// function btnClick() {
//   // let h2 = button1.nextElementSibling.nextElementSibling;
//   if (+title.textContent == 20) {
//     alert("tugadi");
//   } else {
//     title.textContent++;
//   }
// }
// button1.setAttribute("onclick", "btnClick()");

// function btnClick2() {
//   // let h2 = button2.nextElementSibling;
//   if (+title.textContent == 1) {
//     alert("tugadi");
//   } else {
//     title.textContent--;
//   }
// }
// button2.setAttribute("onclick", "btnClick2()");
let btn = document.querySelector("#btn");
let section = document.querySelector("#section");

function randomColor() {
  let randomcolor1 = Math.floor(Math.random() * 255);
  let randomcolor2 = Math.floor(Math.random() * 255);
  let randomcolor3 = Math.floor(Math.random() * 255);
  return `rgb(${randomcolor1},${randomcolor2},${randomcolor3})`;
}
section.style.backgroundColor = randomColor();
body.style.backgroundImage = `linear-gradient(180deg,${randomcolor1}, ${randomcolor2}, ${randomcolor3})`;

function btnClick() {
  let btn = btn.nextElementSibling.nextElementSibling;
 
}
section.setAttribute("onclick", "btnClick()");

// section.style.backgroundImage = `linear-gradient(180deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;

// background-color: #4158D0;
// background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
