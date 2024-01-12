var slide = document.getElementById("slide_nav");
function nav_open(){
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
function showMore(){
  const tag = document.getElementById("extendedpage");
  tag.style.display="block";
}

// code for animating last page 
// using intersectionobserver for the purpose of observing the screen
// and do work accordingly 

// Getting all the things that are needeed to be animated
const nodeList = document.querySelectorAll("#ani_mani");
const parent_div = document.getElementById("selector");

// Creating intersectionobserver => observe
// The observer is a object
// While IntersectionObserver() is a construtur function
const observer = new IntersectionObserver(enteries =>{
  enteries.forEach(entry =>{
    if (entry.isIntersecting==true){
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.animationPlayState = "running";
      }      
    }
  })
},
{
  threshold: 0.75,
}
)

observer.observe(parent_div)





