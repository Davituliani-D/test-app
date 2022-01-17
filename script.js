const heading = document.getElementById('hello');
const heading2 = document.querySelector('.h2-class');

setTimeout(function () {
addStylesTo(heading, "JavaScript" );
}, 1500);
setTimeout(function () {
  addStylesTo(heading2.children[0], "Practice")
}, 3000);

//Общая функция, её можно добавить в любой узел;

function addStylesTo(node, text) {
  console.dir (node.textContent);
  node.textContent = text;
  node.style.color = "red";
  node.style.textAlign = "center";
  node.style.backgroundColor = "black";
  node.style.padding = "2em"
  node.style.display = "block"
  node.style.width = "100%"
}

heading.onclick = () => {
if (heading.style.color === "red") {
  heading.style.color = "#000"
  heading.style.backgroundColor = "#fff"
} else {
  heading.style.color = "red"
  heading.style.backgroundColor = "#000"
}
}
