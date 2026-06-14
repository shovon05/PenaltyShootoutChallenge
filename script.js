const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const playerNameInput = document.getElementById("player-name");

const playerDisplay = document.getElementById("player-display");

const scoreDisplay = document.getElementById("score");
const shotsLeftDisplay = document.getElementById("shots-left");
const timerDisplay = document.getElementById("timer");

const resultDisplay = document.getElementById("result");

const finalScoreDisplay = document.getElementById("final-score");
const accuracyDisplay = document.getElementById("accuracy");
const ratingDisplay = document.getElementById("rating");
const difficultyResult = document.getElementById("difficulty-result");
const endPlayer = document.getElementById("end-player");

const goalkeeper = document.getElementById("goalkeeper");
const ball = document.getElementById("ball");

const leftBtn = document.getElementById("left-btn");
const centerBtn = document.getElementById("center-btn");
const rightBtn = document.getElementById("right-btn");

const gameState = {
    playerName: "",
    mode: "single",
    difficulty: "easy",

    score: 0,
    shotsTaken: 0,
    totalShots: 5,

    combo: 0,
    longestCombo: 0,

    misses: 0,
    saves: 0,

    shotHistory: []
};

let timer = 5;
let countdown;

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);

leftBtn.addEventListener("click", () => takeShot("left"));
centerBtn.addEventListener("click", () => takeShot("center"));
rightBtn.addEventListener("click", () => takeShot("right"));

function startGame() {

    gameState.playerName =
        playerNameInput.value.trim() || "Anonymous";

    gameState.mode =
        document.querySelector(
            'input[name="mode"]:checked'
        ).value;

    gameState.difficulty =
        document.querySelector(
            'input[name="difficulty"]:checked'
        ).value;

    gameState.score = 0;
    gameState.shotsTaken = 0;
    gameState.combo = 0;
    gameState.longestCombo = 0;
    gameState.misses = 0;
    gameState.saves = 0;
    gameState.shotHistory = [];

    startScreen.classList.add("hidden");
    endScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    playerDisplay.textContent =
        `⚽ ${gameState.playerName}`;

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

            gameState.misses++;
            gameState.shotsTaken++;
            gameState.combo = 0;

            resultDisplay.textContent =
                "⏰ TIME OUT";

            updateUI();

            setTimeout(nextRound, 1200);
        }

    }, 1000);
}

function takeShot(direction) {

    clearInterval(countdown);

    disableButtons();

    const keeperDive =
        generateKeeperMove(direction);

    animateShot(direction, keeperDive);

    gameState.shotHistory.push(direction);

    setTimeout(() => {

        if (direction === keeperDive) {

            gameState.saves++;
            gameState.combo = 0;

            resultDisplay.textContent =
                "🧤 SAVED!";

        } else {

            gameState.score++;

            gameState.combo++;

            if (
                gameState.combo >
                gameState.longestCombo
            ) {
                gameState.longestCombo =
                    gameState.combo;
            }

            resultDisplay.textContent =
                comboMessage();
        }

        gameState.shotsTaken++;

        updateUI();

        setTimeout(nextRound, 1500);

    }, 600);
}

function generateKeeperMove(currentShot) {

    const dirs = [
        "left",
        "center",
        "right"
    ];

    if (
        gameState.difficulty === "easy"
    ) {

        return dirs[
            Math.floor(
                Math.random() * 3
            )
        ];
    }

    if (
        gameState.difficulty === "medium"
    ) {

        if (
            Math.random() < 0.35 &&
            gameState.shotHistory.length
        ) {

            return gameState.shotHistory[
                gameState.shotHistory.length - 1
            ];
        }

        return dirs[
            Math.floor(
                Math.random() * 3
            )
        ];
    }

    if (
        gameState.difficulty === "hard"
    ) {

        if (
            gameState.shotHistory.length >= 2 &&
            Math.random() < 0.7
        ) {

            return mostCommonShot();
        }

        return dirs[
            Math.floor(
                Math.random() * 3
            )
        ];
    }

    return currentShot;
}

function mostCommonShot() {

    let counts = {
        left: 0,
        center: 0,
        right: 0
    };

    gameState.shotHistory.forEach(
        shot => counts[shot]++
    );

    return Object.keys(counts)
        .reduce((a, b) =>
            counts[a] > counts[b]
                ? a
                : b
        );
}

function comboMessage() {

    if (gameState.combo >= 5)
        return "👑 PENALTY KING!";

    if (gameState.combo >= 3)
        return "🔥 HAT TRICK!";

    if (gameState.combo >= 2)
        return "⚡ ON FIRE!";

    return "🥅 GOAL!";
}

function animateShot(
    direction,
    keeperDive
) {

    const shotPos = {
        left: "20%",
        center: "50%",
        right: "80%"
    };

    ball.style.left =
        shotPos[direction];

    goalkeeper.style.left =
        shotPos[keeperDive];
}

function resetAnimation() {

    ball.style.left = "50%";
    goalkeeper.style.left = "50%";

    ball.style.transform =
        "translateX(-50%)";

    goalkeeper.style.transform =
        "translateX(-50%)";
}

function disableButtons() {

    leftBtn.disabled = true;
    centerBtn.disabled = true;
    rightBtn.disabled = true;
}

function enableButtons() {

    leftBtn.disabled = false;
    centerBtn.disabled = false;
    rightBtn.disabled = false;
}

function nextRound() {

    if (
        gameState.shotsTaken >=
        gameState.totalShots
    ) {
        endGame();
        return;
    }

    resultDisplay.textContent = "";

    resetAnimation();

    enableButtons();

    updateUI();

    startTimer();
}

function updateUI() {

    scoreDisplay.textContent =
        gameState.score;

    shotsLeftDisplay.textContent =
        gameState.totalShots -
        gameState.shotsTaken;
}

function getRating(score) {

    switch(score){

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
            return "Legend";
    }
}

function endGame() {

    gameScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");

    const accuracy =
        Math.round(
            (gameState.score /
            gameState.totalShots) * 100
        );

    endPlayer.textContent =
        gameState.playerName;

    finalScoreDisplay.textContent =
        `${gameState.score} / ${gameState.totalShots}`;

    accuracyDisplay.textContent =
        `${accuracy}%`;

    difficultyResult.textContent =
        gameState.difficulty
            .charAt(0)
            .toUpperCase() +
        gameState.difficulty.slice(1);

    ratingDisplay.textContent =
        getRating(gameState.score);

    saveLeaderboard(accuracy);
}

function saveLeaderboard(accuracy){

    const leaderboard =
        JSON.parse(
            localStorage.getItem(
                "penaltyLeaderboard"
            )
        ) || [];

    leaderboard.push({
        player:
            gameState.playerName,
        score:
            gameState.score,
        accuracy,
        difficulty:
            gameState.difficulty,
        date:
            new Date()
            .toLocaleDateString()
    });

    leaderboard.sort(
        (a,b) =>
            b.score - a.score
    );

    localStorage.setItem(
        "penaltyLeaderboard",
        JSON.stringify(
            leaderboard.slice(0,10)
        )
    );
}

function restartGame() {

    gameScreen.classList.add("hidden");
    endScreen.classList.add("hidden");

    startScreen.classList.remove(
        "hidden"
    );
}
