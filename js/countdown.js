(function () {
  const
    second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let
    today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = today.getMonth() >= 10 ? (String(today.getMonth())) : (String(today.getMonth()).padStart(2, "0")),
    yyyy = "2021",
    nextYear = "2022",
    dayMonth = "12/31",
    dday = dayMonth + '/' + yyyy;

  today = mm + '/' + dd + '/' + yyyy;
  if (today > dday) {
    dday = dayMonth + nextYear
  }

  const
    countDown = new Date(dday).getTime(),
    x = setInterval(function() {
      const
        now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / day);
      document.getElementById("hours").innerText = `${Math.floor((distance % (day)) / hour)}`;
      document.getElementById("minutes").innerText = `${Math.floor((distance % hour) / minute)}`;
      document.getElementById("seconds").innerText = `${Math.floor((distance % minute) / second)}`;

      if (distance < 0) {
        document.getElementById("headline").innerText = "Today is the day!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
    }, 0);
})();