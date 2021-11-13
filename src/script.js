function showtask() {
  document.getElementById("tasks").style.display = "block";
}

function hidetask() {
  document.getElementById("tasks").style.display = "none";
}

function handlehide1() {
  document.getElementById("hide1").style.display = "block";
}
function handlehide1right() {
  document.getElementById("hide1").style.display = "none";
  document.getElementById("hide2").style.display = "block";
}

function handlehide1wrong() {
  document.getElementById("hide1wrong").style.backgroundColor = "red";
}

function handlehide2no() {
  document.getElementById("error").style.display = "block";
}

function handlehide2yes() {
  document.getElementById("hide2").style.display = "none";
  document.getElementById("hide3").style.display = "block";
}
