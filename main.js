
const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C++', 'C#',
    'Python','git','github',
    '.NET', 'MySQL','AWS',
    'Bootstrap'
];

var tagCloud = TagCloud('.sphere', myTags,{

  // radius in px

  radius: 225,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});

//To change the color of text randomly
// var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
// var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.sphere').style.color = '#00897B';


// Projects more and less section
var projPart2 = document.getElementsByClassName("projPart2");
var moreBtn = document.getElementsByClassName("moreBtn");
var lessBtn = document.getElementsByClassName("LessBtn");


moreBtn[0].addEventListener('click',  (e)=>{
  moreBtn[0].style.display = "none";
  projPart2[0].style.display = "block";
});
lessBtn[0].addEventListener('click',  (e)=>{
  moreBtn[0].style.display = "block";
  projPart2[0].style.display = "none";
});


moreBtn[1].addEventListener('click',  (e)=>{
  moreBtn[1].style.display = "none";
  projPart2[1].style.display = "block";
});
lessBtn[1].addEventListener('click',  (e)=>{
  moreBtn[1].style.display = "block";
  projPart2[1].style.display = "none";
});


moreBtn[2].addEventListener('click',  (e)=>{
  moreBtn[2].style.display = "none";
  projPart2[2].style.display = "block";
});
lessBtn[2].addEventListener('click',  (e)=>{
  moreBtn[2].style.display = "block";
  projPart2[2].style.display = "none";
});

moreBtn[3].addEventListener('click',  (e)=>{
  moreBtn[3].style.display = "none";
  projPart2[3].style.display = "block";
});
lessBtn[3].addEventListener('click',  (e)=>{
  moreBtn[3].style.display = "block";
  projPart2[3].style.display = "none";
});

moreBtn[4].addEventListener('click',  (e)=>{
  moreBtn[4].style.display = "none";
  projPart2[4].style.display = "block";
});
lessBtn[4].addEventListener('click',  (e)=>{
  moreBtn[4].style.display = "block";
  projPart2[4].style.display = "none";
});

moreBtn[5].addEventListener('click',  (e)=>{
  moreBtn[5].style.display = "none";
  projPart2[5].style.display = "block";
});
lessBtn[5].addEventListener('click',  (e)=>{
  moreBtn[5].style.display = "block";
  projPart2[5].style.display = "none";
});

moreBtn[6].addEventListener('click',  (e)=>{
  moreBtn[6].style.display = "none";
  projPart2[6].style.display = "block";
});
lessBtn[6].addEventListener('click',  (e)=>{
  moreBtn[6].style.display = "block";
  projPart2[6].style.display = "none";
});

var projRoaming = document.getElementById("roamingRazors");
var RoamingSection = document.getElementById("RoamingImgSection");
var firstSection = document.getElementById("section");
var body = document.getElementById("body");
var close = document.getElementById("close");
projRoaming.addEventListener('click', (e)=>{
  RoamingSection.style.display = "flex";
  body.style.overflow = "hidden";
  firstSection.style.display = "none";

});
close.addEventListener('click', (e)=>{
  RoamingSection.style.display = "none";
  body.style.overflow = "scroll";
  firstSection.style.display = "flex";

});