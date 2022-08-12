var slide = document.getElementById("slide_nav");
function nav_open(){
    console.log(slide);
    slide.style.right="0vw";
  }
function nav_close(){
    slide.style.right="-110vw";
  }
// for skills bar in skills page 
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");
const line5 = document.getElementById("line5");
const div = document.getElementById("skill_div");
// for web devices
div.onmouseover = function(e) {  
  line1.style.width="90%"
  line2.style.width="68%"
  line3.style.width="60%"
  line4.style.width="50%"
  line5.style.width="40%"

};
// for mobile devices
div.ontouchstart = function(e) {  
  line1.style.width="90%"
  line2.style.width="68%"
  line3.style.width="60%"
  line4.style.width="50%"
  line5.style.width="40%"

};

