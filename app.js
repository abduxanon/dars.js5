function randomColor() {
  let randomcolor1 = Math.floor(Math.random() * 255);
  let randomcolor2 = Math.floor(Math.random() * 255);
  let randomcolor3 = Math.floor(Math.random() * 255);
  return `rgb(${randomcolor1},${randomcolor2},${randomcolor3})`;
}
section.style.backgroundColor = randomColor();
body.style.backgroundImage = `linear-gradient(180deg,${randomcolor1}, ${randomcolor2}, ${randomcolor3})`;

