// Function to update the clock
function updateClock() {
    // Create a new Date object to get the current time
    const now = new Date();

    // Get hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format hours, minutes, and seconds to ensure they have two digits (e.g., "09" instead of "9")
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Display the time on the page
    const clockDisplay = document.getElementById("clock");
    clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock immediately
updateClock();

// Set an interval to update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);
