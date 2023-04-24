const title = document.querySelector("div.hello:nth-child(2) h1");

function handleTitleClick() {
  if (title.style.color === "red") {
    title.style.color = "blue";
  } else {
    title.style.color = "red";
  }
}

function handleWindoResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("Good!");
}

title.addEventListener("click", handleTitleClick);

window.addEventListener("resize", handleWindoResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
