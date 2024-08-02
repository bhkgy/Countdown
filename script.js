function countdownTimer() {
    const targetDate = new Date(new Date().getFullYear(), 7, 8).getTime(); // 7 is August (0-based index)
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
        // Calculate total seconds
        const totalSeconds = Math.floor(distance / 1000);

        document.getElementById("totalSeconds").innerText = totalSeconds;
    } else {
        clearInterval(interval);
        document.getElementById("totalSeconds").innerText = "0";
    }
}

const interval = setInterval(countdownTimer, 10);
