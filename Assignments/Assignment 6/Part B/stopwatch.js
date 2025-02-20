let timer;
let seconds = 0;

function formatTime(s) {
    const hrs = String(Math.floor(s / 3600)).padStart(2, '0');
    const mins = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const secs = String(s % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startStopwatch() {
    if (!timer) {
        timer = setInterval(async () => {
            await delay(0); // Ensuring async execution
            seconds++;
            document.getElementById("timeDisplay").textContent = formatTime(seconds);
        }, 1000);
    }
}

async function stopStopwatch() {
    if (timer) {
        await delay(0);
        clearInterval(timer);
        timer = null;
    }
}

async function resetStopwatch() {
    await stopStopwatch();
    seconds = 0;
    document.getElementById("timeDisplay").textContent = "00:00:00";
    document.getElementById("datePicker").removeAttribute("disabled");
    document.getElementById("datePicker").value = "";
}

document.getElementById("datePicker").addEventListener("keydown", function(event) {
    event.preventDefault();
});

