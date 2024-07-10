let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");
let lapbtn = document.getElementById("lap");
let display = document.getElementById("display");
let lapbox = document.getElementById("lapbox");
let lapclear = document.getElementById("clear");
let intervalId = null;
let msec = 0;
let sec = 0;
let minutes = 0;
let hours = 0;
let lapCount = 0;

startbtn.addEventListener('click', () => {
    if (intervalId == null) {
        intervalId = setInterval(stopwatchstart, 10);
    }
});

stopbtn.addEventListener('click', () => {
    if (intervalId != null) {
        clearInterval(intervalId);
        intervalId = null;
    }
});

lapbtn.addEventListener('click', () => {
    addLap();
});
lapclear.addEventListener('click', ()=>{
    clearLaps();
});
resetbtn.addEventListener('click', () => {
    msec = 0;
    sec = 0;
    minutes = 0;
    hours = 0;
    updatedisplay();
    clearLaps();
});

function stopwatchstart() {
    msec++;
    if (msec >= 100) { 
        msec = 0;
        sec++;
        if (sec >= 60) {
            sec = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let msecDisplay = msec < 10 ? `0${msec}` : msec;
    let secDisplay = sec < 10 ? `0${sec}` : sec;
    let minutesDisplay = minutes < 10 ? `0${minutes}` : minutes;
    let hoursDisplay = hours < 10 ? `0${hours}` : hours;

    display.innerHTML = `${hoursDisplay} : ${minutesDisplay} : ${secDisplay} <sup>${msecDisplay}</sup>`;
}

function updatedisplay() {
    let msecDisplay = msec < 10 ? `0${msec}` : msec;
    let secDisplay = sec < 10 ? `0${sec}` : sec;
    let minutesDisplay = minutes < 10 ? `0${minutes}` : minutes;
    let hoursDisplay = hours < 10 ? `0${hours}` : hours;
    display.innerHTML = `${hoursDisplay} : ${minutesDisplay} : ${secDisplay} <sup>${msecDisplay}</sup>`;
}

function addLap() {
    lapCount++;
    const lapDiv = document.createElement('div');
    lapDiv.className='lapcounter';
    lapDiv.innerHTML = `Lap #${lapCount} : ${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? '0' + minutes : minutes} : ${sec < 10 ? '0' + sec : sec} <sup>${msec < 10 ? '0' + msec : msec}</sup>`;
    lapbox.append(lapDiv);
}

function clearLaps() {
    lapbox.innerHTML = '';
    lapCount = 0;
}
