var style = "border:1px solid blue;position:fixed;top:0; z-index:1000;width:5vw;height:100%;opacity:0;";

var leftDiv = document.createElement("div");
leftDiv.setAttribute("id", "ereaderify-pgup");
leftDiv.setAttribute("class", "ereaderify-edge");
leftDiv.setAttribute("style", "left:0;" + style);
leftDiv.onclick = function () { window.scrollByPages(-1);};
console.log(leftDiv);
document.body.appendChild(leftDiv);


var rightDiv = document.createElement("div");
rightDiv.setAttribute("id", "ereaderify-pgup");
rightDiv.setAttribute("class", "ereaderify-edge");
rightDiv.setAttribute("style", "left:95%;" + style);
rightDiv.onclick = function () { window.scrollByPages(1);};
console.log(rightDiv);
document.body.appendChild(rightDiv);
