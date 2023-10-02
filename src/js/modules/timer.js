const blockHours = document.getElementById("hours");
const blockMinutes = document.getElementById("minutes");
const blockSecond = document.getElementById("seconds");

function updateTimer() {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    const timeRemaining = endOfDay - now;

    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);

    blockHours.textContent = hours.toString().padStart(2, "0");
    blockMinutes.textContent = minutes.toString().padStart(2, "0");
    blockSecond.textContent = seconds.toString().padStart(2, "0");
}

if (blockHours && blockMinutes && blockSecond) {
    updateTimer(); // Обновляем таймер сразу
    setInterval(updateTimer, 1000); // Обновляем таймер каждую секунду
}