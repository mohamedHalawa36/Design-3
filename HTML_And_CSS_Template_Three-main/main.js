let targetDate = new Date("9-21-2023");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let date,newDate,factor,updatedays,updateHours,updateMinutes,updateSec;
setInterval(()=>{
  date = new Date();
  newDate = targetDate - date
  factor = (1000*60*60*24)
  updatedays = Math.trunc(newDate/factor);
  newDate -= updatedays*factor
  factor = (1000*60*60)
  updateHours =Math.trunc( newDate/factor)
  newDate -= updateHours*factor
  factor = (1000*60)
  updateMinutes =Math.trunc(newDate / factor)
  newDate-= updateMinutes*factor
  updateSec = Math.trunc(newDate/1000)

  days.innerHTML = updatedays;
  hours.innerHTML = updateHours;
  minutes.innerHTML = updateMinutes;
  seconds.innerHTML = updateSec
},1000)




  let secStat = document.querySelector(".aw-stats");
  let stats = document.querySelectorAll(".st h1");
  window.onscroll = ()=>{
    if (scrollY >= secStat.offsetTop - 100) {
      stats.forEach((st) => {
        st.innerHTML = st.dataset.value;
      });
    }
  }

 let skillSection = document.querySelector(".our-skills")
let progressBars = document.querySelectorAll(".width")
let progPerxentBox = document.querySelectorAll(".pro")
window.onscroll = function () {
  if (scrollY >= skillSection.offsetTop - 50) {
    for (let i = 0; i < progressBars.length; i++) {
      progressBars[i].style.width = progressBars[i].dataset.width;
      progPerxentBox[i].innerHTML = progressBars[i].dataset.width;
    }
  }
};


let comments = document.querySelectorAll(".testimonials .comment");
comments.forEach((e) => {
  e.onmouseover = function () {
    e.style.scale = 1.1;
    e.style.transitionDuration = "0.4s";
  };
});

comments.forEach((e) => {
  e.onmouseout = function () {
    e.style.scale = 1;
  };
});

