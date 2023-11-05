console.log("script loaded....");

function paint(color) {
  console.log(color);
  const circle = document.getElementById("circleID");
  circle.style = `background-color:${color}`;
  console.log(circle);
}

function getRandColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("circleID").style.backgroundColor = randomColor;
}
