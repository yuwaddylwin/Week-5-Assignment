document.addEventListener('DOMContentLoaded', function () {
    const secondsInput = document.getElementById('seconds-input');
    const startButton = document.getElementById('start-timer');
    const pauseButton = document.getElementById('pause-timer');
    const resetButton = document.getElementById('reset-timer');
    const timerDisplay = document.getElementById('timer-display');
    const message = document.getElementById('message');

    let countdown;
    let timeLeft = 0;
    let isPaused = false;

    // Function to start the timer
    function startTimer() {
        if (timeLeft <= 0) {
            timeLeft = parseInt(secondsInput.value);
            if (isNaN(timeLeft) || timeLeft <= 0) {
                alert('Please enter a valid number of seconds.');
                return;
            }
        }

        isPaused = false;
        clearInterval(countdown);

        countdown = setInterval(() => {
            if (!isPaused) {
                timeLeft--;
                updateDisplay();

                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    timerDisplay.textContent = '00:00';
                    message.textContent = "Time's up!";
                }
            }
        }, 1000);
    }

    // Function to pause the timer
    function pauseTimer() {
        isPaused = true;
    }

    // Function to reset the timer
    function resetTimer() {
        clearInterval(countdown);
        timeLeft = 0;
        isPaused = false;
        timerDisplay.textContent = '00:00';
        message.textContent = '';
        secondsInput.value = '';
    }

    // Function to update the timer display
    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // Event listeners
    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);
});