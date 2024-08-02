function countdownTimer() {
    const targetDate = new Date(new Date().getFullYear(), 7, 8).getTime(); // 7 is August (0-based index)
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
        // Calculate total seconds
        const totalSeconds = (distance / 1000).toFixed(2);
        document.getElementById("totalSeconds").innerText = totalSeconds;

        // Detailed countdown
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    } else {
        clearInterval(interval);
        document.getElementById("totalSeconds").innerText = "0.00";
        document.getElementById("days").innerText = "0";
        document.getElementById("hours").innerText = "0";
        document.getElementById("minutes").innerText = "0";
        document.getElementById("seconds").innerText = "0";
    }
}

// Update every 10 milliseconds for higher precision
const interval = setInterval(countdownTimer, 10);
