function countdownTimer() {
    const targetDate = new Date(new Date().getFullYear(), 7, 8).getTime(); // 7 is August (0-based index)
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate total seconds with milliseconds precision
    const totalSeconds = (distance / 1000).toFixed(2); // Rounded to 2 decimal places

    if (distance > 0) {
        document.getElementById("totalSeconds").innerText = totalSeconds;
    } else {
        clearInterval(interval);
        document.getElementById("totalSeconds").innerText = "0.00";
    }
}

// Update every 10 milliseconds for higher precision
const interval = setInterval(countdownTimer, 10);
