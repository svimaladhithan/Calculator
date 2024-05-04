function createButton(id, onclickFunction, innerHTML) {
  const button = document.createElement("button");
  button.type = "button";
  button.id = id;
  button.innerHTML = innerHTML;
  button.onclick = onclickFunction;
  return button;
}
function creatediv(id, className, innerHTML) {
  const div = document.createElement("div");
  div.id = id;
  div.setAttribute("class", className);
  div.innerHTML = innerHTML;
  return div;
}

const header= document.createElement("h1");
header.setAttribute("class","head");
header.id="title";
header.innerHTML= "Calculator using DOM";

const paragraph= document.createElement("p");
paragraph.setAttribute("class","para");
paragraph.id="description";
paragraph.innerHTML="A calculator built with the Document Object Model (DOM) leverages HTML,CSS, and JavaScript to create an interactive user interface for performing arithmetic operations";

const result = document.createElement("input");
result.id = "result";

result.addEventListener("keydown", (event) => {
  if (!(event.key >= 0 && event.key <= 9)) {
    event.preventDefault();
    alert("Only numbers are allowed");
  }
});

const div = creatediv("div", "calculator", "");
const div1 = creatediv("div1", "", "");
const buttonC = createButton("clear", clearDisplay, "c");
const buttonBack = createButton("", back, "<-");
const buttondot = createButton("", appendToDisplay, ".");
const buttonMulti = createButton("multi", appendToDisplay, "*");
const button7 = createButton("7", appendToDisplay, "7");
const button8 = createButton("8", appendToDisplay, "8");
const button9 = createButton("9", appendToDisplay, "9");
const buttondivide = createButton("divide", appendToDisplay, "/");
const button4 = createButton("4", appendToDisplay, "4");
const button5 = createButton("5", appendToDisplay, "5");
const button6 = createButton("6", appendToDisplay, "6");
const buttonsub = createButton("subtract", appendToDisplay, "-");
const button1 = createButton("1", appendToDisplay, "1");
const button2 = createButton("2", appendToDisplay, "2");
const button3 = createButton("3", appendToDisplay, "3");
const buttonsum = createButton("add", appendToDisplay, "+");
const buttonzero = createButton("0", appendToDisplay, "0");
const buttondzero = createButton("00", appendToDisplay, "00");
const buttonequal = createButton("equal", calculate, "=");

function appendToDisplay(event) {
  const value = event.target.textContent;
  document.getElementById("result").value += value;
}

function clearDisplay() {
  document.getElementById("result").value = "";
}

function back() {
  const result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, -1);
}

function calculate() {
  const final = document.getElementById("result").value;
  document.getElementById("result").value = eval(final);
}

div1.append(
  buttonC,
  buttonBack,
  buttondot,
  buttonMulti,
  button7,
  button8,
  button9,
  buttondivide,
  button4,
  button5,
  button6,
  buttonsub,
  button1,
  button2,
  button3,
  buttonsum,
  buttonzero,
  buttondzero,
  buttonequal
);
div.append(result, div1);
document.body.append(header,paragraph,div);
