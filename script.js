const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");

const scoreDisplay = document.getElementById("score");
const shotsLeftDisplay = document.getElementById("shots-left");
const timerDisplay = document.getElementById("timer");

const resultDisplay = document.getElementById("result");

const finalScoreDisplay = document.getElementById("final-score");
const accuracyDisplay = document.getElementById("accuracy");
const ratingDisplay = document.getElementById("rating");

const goalkeeper = document.getElementById("goalkeeper");
const ball = document.getElementById("ball");

let score = 0;
let shotsTaken = 0;
let totalShots = 5;

let timer = 5;
let countdown;

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);

leftBtn.addEventListener("click", () => takeShot("left"));
rightBtn.addEventListener("click", () => takeShot("right"));

function startGame() {
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    score = 0;
    shotsTaken = 0;

    updateUI();
    startTimer();
}

function startTimer() {
    timer = 5;
    timerDisplay.textContent = timer;

    clearInterval(countdown);

    countdown = setInterval(() => {
        timer--;

        timerDisplay.textContent = timer;

        if (timer <= 0) {
            clearInterval(countdown);

            resultDisplay.textContent = "⏰ Missed! Time Out";

            shotsTaken++;

            setTimeout(() => {
                nextRound();
            }, 1200);
        }
    }, 1000);
}

function takeShot(direction) {

    clearInterval(countdown);

    leftBtn.disabled = true;
    rightBtn.disabled = true;

    const keeperDive =
        Math.random() < 0.5 ? "left" : "right";

    animateShot(direction, keeperDive);

    setTimeout(() => {

        if (direction === keeperDive) {

            resultDisplay.textContent =
                "❌ SAVED!";

        } else {

            score++;

            resultDisplay.textContent =
                "🥅 GOAL!";
        }

        shotsTaken++;

        updateUI();

        setTimeout(() => {
            nextRound();
        }, 1500);

    }, 600);
}

function animateShot(direction, keeperDive) {

    ball.style.left =
        direction === "left" ? "25%" : "75%";

    goalkeeper.style.left =
        keeperDive === "left" ? "30%" : "70%";
}

function resetAnimation() {

    ball.style.left = "50%";
    goalkeeper.style.left = "50%";

    ball.style.transform =
        "translateX(-50%)";

    goalkeeper.style.transform =
        "translateX(-50%)";
}

function nextRound() {

    if (shotsTaken >= totalShots) {
        endGame();
        return;
    }

    resultDisplay.textContent = "";

    resetAnimation();

    leftBtn.disabled = false;
    rightBtn.disabled = false;

    updateUI();

    startTimer();
}

function updateUI() {

    scoreDisplay.textContent = score;

    shotsLeftDisplay.textContent =
        totalShots - shotsTaken;
}

function getRating(goals) {

    switch (goals) {

        case 0:
            return "Better Luck Next Time";

        case 1:
            return "Beginner Striker";

        case 2:
            return "Local League Player";

        case 3:
            return "Skilled Finisher";

        case 4:
            return "Elite Striker";

        case 5:
            return "Penalty King";

        default:
            return "";
    }
}

function endGame() {

    gameScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");

    const accuracy =
        Math.round((score / totalShots) * 100);

    finalScoreDisplay.textContent =
        `${score} / ${totalShots}`;

    accuracyDisplay.textContent =
        `${accuracy}%`;

    ratingDisplay.textContent =
        getRating(score);
}

function restartGame() {

    endScreen.classList.add("hidden");

    startGame();
}
