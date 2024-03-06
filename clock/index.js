const timer = document.querySelector(".timer");
const date  = document.querySelector(".date");

const weekArray = ["日", "月", "火", "水", "木", "金", "土"];


function timerMethod() {
    const gDate = new Date();
    const month = gDate.getMonth() + 1;
    const day   = gDate.getDate();
    const week  = gDate.getDay();

    const hour    = gDate.getHours();
    const minutes = gDate.getMinutes();
    const second  = gDate.getSeconds().toString().padStart(2, "0");
    
    timer.innerHTML = `${hour}:${minutes}:${second}`;
    date.innerHTML  = `${month}月${day}日(${weekArray[week]})`;
    // date.innerHTML = month + "月" + day + "日" + "(" + weekArray[week] + ")";
}

setInterval(timerMethod, 1000);