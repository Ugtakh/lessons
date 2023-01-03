const colors = ["red", "blue", "green"];
let colorIndex = 0;

const body = document.getElementsByTagName("body")[0];
const divs = document.getElementsByClassName("box");

const change = () => {
  //   body.style.backgroundColor = `rgb(${red},${green},${blue})`;
  for (let i = 0; i < divs.length; i++) {
    let color = getColor();
    divs[i].style.backgroundColor = color;
    divs[i].textContent = color;
  }
};

const getColor = () => {
  let red = Math.floor(Math.random() * 256).toString(16);
  let green = Math.floor(Math.random() * 256).toString(16);
  let blue = Math.floor(Math.random() * 256).toString(16);
  return `#${red}${green}${blue}`;
};

myBtn.addEventListener("click", change);
