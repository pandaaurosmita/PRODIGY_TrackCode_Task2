
let timerInterval;
let elapsedTime = 0;
let isRunning = false;
const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
});

resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);

function startTimer() {
    isRunning = true;
    startStopBtn.textContent = 'Pause';
    resetBtn.disabled = true;
    lapBtn.disabled = false;
    timerInterval = setInterval(() => {
        elapsedTime += 10;
        displayTime();
    }, 10);
}

function pauseTimer() {
    isRunning = false;
    startStopBtn.textContent = 'Start';
    clearInterval(timerInterval);
    resetBtn.disabled = false;
    lapBtn.disabled = true;
}

function resetTimer() {
    elapsedTime = 0;
    displayTime();
    laps.innerHTML = '';
    resetBtn.disabled = true;
    lapBtn.disabled = true;
}

function recordLap() {
    const li = document.createElement('li');
    li.textContent = formatTime(elapsedTime);
    laps.appendChild(li);
}

function displayTime() {
    display.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
    const date = new Date(time);
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}
