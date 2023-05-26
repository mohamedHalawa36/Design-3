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
// let day = newDate.getDate() - date.getDate()
// let hour = newDate.getHours() - date.getHours();

// if (hour >= 0) {
//   days.innerHTML = day;
//   hours.innerHTML = hour;
// } else {
//   day -= 1;
//   hour = 24 + (newDate.getHours() - date.getHours());
//   days.innerHTML = day;
//   hours.innerHTML = hour;
// }

// let min = newDate.getMinutes() - date.getMinutes();

// if (min >= 0) {
//   minutes.innerHTML = min;
// } else {
//   hour -= 1;
//   min += 60;

//   minutes.innerHTML = min;
//   hours.innerHTML = hour;
// }

// let sec = newDate.getSeconds() - date.getSeconds();

// if (sec >= 0) {
//   seconds.innerHTML = sec;
// } else {
//   min -= 1;
//   sec += 60;
//   seconds.innerHTML = sec;
//   minutes.innerHTML = min;
// }
// //SECONDS
// setInterval(() => {
//   if (sec === 0) {
//     sec = 60;
//     sec -= 1;
//     seconds.innerHTML = sec;
//   } else {
//     sec -= 1;
//     seconds.innerHTML = sec;
//   }
// }, 1000);
// //MINUTES
// setInterval(() => {
//   if (min === 0) {
//     min = 60;
//     minutes.innerHTML = min;
//   } else if (sec === 0) {
//     min -= 1;
//     minutes.innerHTML = min;
//   }
// }, 1000);

// //HOURS
// setInterval(() => {
//   if (hour === 0) {
//     hour = 24;
//     hours.innerHTML = hour;
//   } else if (min === 0) {
//     hour -= 1;
//     hours.innerHTML = hour;
//   }
// }, 1000);

// let skills = document.querySelector(".our-skills");
// let progs = document.querySelectorAll(".progress .width");
// let pros = document.querySelectorAll(".progress .pro");
// document.onscroll = function () {
//   if (scrollY >= skills.offsetTop - 200) {
//     for (let i = 0; i < pros.length; i++) {
//       progs[i].style.width = progs[i].dataset.width;
//       pros[i].innerHTML = progs[i].dataset.width;
//     }
//   }
// };

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
