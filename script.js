const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

//for small screen devices
hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

//to close nav bar hamburger menu
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// var simg = document.getElementsByClassName("media");

var simg = document.querySelectorAll(".socio");
console.log(simg);
//dark theme
var icon = document.querySelector("#icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    

    if(document.body.classList.contains("dark-theme")){
                icon.src ="./images/sun.png";
                simg.forEach(x => x.classList.toggle("darkSocio"));
            }
            else{
                icon.src="./images/moon.png";
                simg.forEach(x => x.classList.remove("darkSocio"));
                
            }
};

// *******CONTACT SECTION**********
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// ***Download resume
function getResume(target){
  location.href="https://drive.google.com/file/d/1Z8GKz7Aag1otZeej0QZ_TVoacvEw7kXH/view?usp=sharing";
};
