const hourMin = document.querySelector(".hour-min");
const sec = document.querySelector(".sec");
const AmPm = document.querySelector(".am-pm");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  hourMin.innerText = `${hours}:${minutes}`;
  sec.innerText = `${seconds}`;
  if (parseInt(hours) < 12) {
    AmPm.innerText = `AM`;
  } else {
    AmPm.innerText = `PM`;
  }
}

getClock();
setInterval(getClock, 1000);

//setTimeout(sayHello, 5000); 해당 시간이 지난 후 함수를 시행해줌.

//console.log(new Date());

//console.log(new Date().getHours());
