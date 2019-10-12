var doc = document;
const mainHeading = doc.querySelector('#main-heading');
const otherHeading = doc.querySelector('#other-heading');
const excitedText = doc.createElement('span');

excitedText.textContent = '!!!';
mainHeading.appendChild(excitedText);

var toAdd = "<p>For it is a human number ...</p>";
mainHeading.insertAdjacentHTML("beforebegin", toAdd);

//mainHeading.style.color = "gray";
//mainHeading.style.fontSize = 66;
//mainHeading.style.textAlign = "right";

mainHeading.style.cssText = "color: gray; font-size: 66; text-align: right";

var middleSection = doc.querySelector(".middle");
middleSection.setAttribute("id", "goober");

var sameSection = doc.querySelector("#goober");
sameSection.setAttribute("style", "color: blue;");

var classes = middleSection.classList;
for (i = 0; i < classes.length; i++) {
  console.log(classes[i]);
}

console.log(typeof(classes));

var fooFunc = function() {
  var target = document.querySelector(".middle");
  var toAdd = document.createElement("p");
  toAdd.textContent = "I've been clicked on!";
  target.appendChild(toAdd);
  console.log("the element was appended to the middle section");
};
var otherFooFunc = function() {
  var target = document.querySelector(".middle");
  console.log("removing event listener (fooFunc) of type click");
  target.removeEventListener("click", fooFunc);
}
var otherOtherFooFunc = function() {
  var target = document.querySelector("h1");
  var toAdd = document.createElement("p");
  toAdd.textContent = "I've been clicked on";
  target.appendChild(toAdd);
  console.log("the element was appended to the document");
}
middleSection.addEventListener("click", fooFunc);
document.addEventListener("click", otherOtherFooFunc);
otherHeading.addEventListener("click", otherFooFunc);

var anotherFooFunc = function(event) {
  event.preventDefault();
  console.log("Suck it, Gordon Ramsey!");
};
var hkLink = document.querySelector("#hk");
hkLink.addEventListener("click", anotherFooFunc);

var one = performance.now();
var f = document.querySelector("body footer");
var newDiv = document.createElement("div");
for (var i = 0; i < 10000; i++) {
  var p = document.createElement("p");
  p.textContent = "REDRUM";
  newDiv.appendChild(p);
}
f.appendChild(newDiv);
var two = performance.now();
console.log("This operation required ${0} ms", two-one);
