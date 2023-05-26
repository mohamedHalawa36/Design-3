let date;
let targetDate = new Date("9-21-2023");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(()=>{
  date = new Date();
  let newDate = targetDate - date
  let factor = (1000*60*60*24)
  let updatedays = Math.trunc(newDate/factor);
  newDate -= updatedays*factor
  factor = (1000*60*60)
  let updateHours =Math.trunc( newDate/factor)
  newDate -= updateHours*factor
  factor = (1000*60)
  let updateMinutes =Math.trunc(newDate / factor)
  newDate-= updateMinutes*factor
  let updateSec = Math.trunc(newDate/1000)

  days.innerHTML = updatedays;
  hours.innerHTML = updateHours;
  minutes.innerHTML = updateMinutes;
  seconds.innerHTML = updateSec
},1000)


let secStat = document.querySelector(".aw-stats");
let stats = document.querySelectorAll(".st h1");
stats.forEach((h1) => {
  h1.innerHTML = 0;
});

window.onscroll = function () {
  if (scrollY >= secStat.offsetTop - 100) {
    stats.forEach((st) => {
      st.innerHTML = st.dataset.value;
    });
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

let skillSection = document.querySelector(".our-skills")
let progressBars = document.querySelectorAll(".width")
window.onscroll = function () {
  if (scrollY >= secStat.offsetTop - 50) {
    progressBars.forEach((bar) => {
      bar.style.width = bar.dataset.width
    });
  }
};