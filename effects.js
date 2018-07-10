var button = document.getElementById("myButton")
var aboutMe = document.getElementById("aboutMe")

// console.log(button)
// console.log(aboutMe)

function showHideAboutMe() {
  if (aboutMe.style.display === "none") {
    aboutMe.style.display = "block";
  } else{
    aboutMe.style.display="none";
  }
}


button.onclick = showHideAboutMe;
