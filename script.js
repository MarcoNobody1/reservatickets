const h1 = document.querySelector("h1");
h1.addEventListener("click", changeColor);

function changeColor() {
  h1.style.color = "darkturquoise";
}

const body = document.body;
const div = document.getElementById("ocean");

window.addEventListener("scroll", function() {
  body.style.background = "#b2f0f1";
  div.style.background = "#b2f0f1";
});

const infodiv = document.getElementById("info");
const infobtn = document.getElementById("getinfo");

infobtn.addEventListener("click", function() {
  infodiv.style.visibility = "visible";
});

const bookbtn = document.getElementById("book");
const bookdiv = document.getElementById("form");

bookbtn.addEventListener("click", function() {
  bookdiv.style.visibility = "visible";
});

const tickets = document.getElementById("tickets");
const h4 = document.querySelector('h4');

tickets.addEventListener("input", function() {
  if (tickets.value > 0) {
    h4.innerText = "Estás comprando " + tickets.value + " tickets.";
  } else {
    h4.innerText = "Estás comprando tickets negativos. ¿Todo bien?";
  }
});

const preference = document.getElementById("preference");
const secondH4 = document.getElementById("secondH4");

preference.addEventListener("change", function() {
  secondH4.innerText = "Tu preferencia es: " + preference.value;
});