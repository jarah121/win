var countDownDate = new Date("Apr 29, 2023 22:00:00").getTime();
var x = setInterval(function() {
    var counter = document.querySelector("#countdown");
    var now = new Date().getTime();
    var distance = countDownDate - now;
    const hour = 1000 * 60 * 60;
    var days = Math.floor(distance / (hour * 24));
    var hours = Math.floor((distance % (hour * 24)) / (hour));
    var minutes = Math.floor((distance % (hour)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    counter.innerHTML = days + " d " + hours + " h " +
        minutes + " m " + seconds + " s ";
    if (distance < 0) {
        clearInterval(x);
        counter.innerHTML = "hhh";
    }
}, 1000);