const menuScreen = document.getElementById("menu-screen");
const gameScreen = document.getElementById("game-screen");
const passScreen = document.getElementById("pass-screen");
const resultScreen = document.getElementById("result-screen");
const finalScreen = document.getElementById("final-screen");

const playerNameInput = document.getElementById("player-name");
const playerAInput = document.getElementById("player-a");
const playerBInput = document.getElementById("player-b");

const singleModeBtn = document.getElementById("single-mode-btn");
const duelModeBtn = document.getElementById("duel-mode-btn");

const startBtn = document.getElementById("start-btn");
const continueBtn = document.getElementById("continue-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const roleDisplay = document.getElementById("role-display");
const messageDisplay = document.getElementById("message");

const scoreA = document.getElementById("score-a");
const scoreB = document.getElementById("score-b");

const timerDisplay = document.getElementById("timer");

const passMessage = document.getElementById("pass-message");

const resultTitle = document.getElementById("result-title");
const resultDetails = document.getElementById("result-details");

const winnerText = document.getElementById("winner-text");

let mode = "single";

const gameState = {
    mode: "single",

    difficulty: "easy",

    playerA: "",
    playerB: "AI",

    scoreA: 0,
    scoreB: 0,

    shooter: "",
    goalkeeper: "",

    shooterChoice: "",
    keeperChoice: "",

    attempt: 1,
    totalAttempts: 4,

    phase: ""
};

singleModeBtn.addEventListener("click", () => {

    mode = "single";

    playerNameInput.classList.remove("hidden");

    playerAInput.classList.add("hidden");
    playerBInput.classList.add("hidden");
});

duelModeBtn.addEventListener("click", () => {

    mode = "duel";

    playerNameInput.classList.add("hidden");

    playerAInput.classList.remove("hidden");
    playerBInput.classList.remove("hidden");
});

startBtn.addEventListener("click", startMatch);

restartBtn.addEventListener("click", restartGame);

function hideAllScreens() {

    menuScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
    passScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    finalScreen.classList.add("hidden");
}

function showScreen(screen) {

    hideAllScreens();

    screen.classList.remove("hidden");
}

function startMatch() {

    gameState.mode = mode;

    gameState.scoreA = 0;
    gameState.scoreB = 0;

    gameState.attempt = 1;

    gameState.difficulty =
        document.getElementById("difficulty").value;

    if (mode === "single") {

        gameState.playerA =
            playerNameInput.value.trim() ||
            "Player";

        gameState.playerB = "AI";

        roleDisplay.textContent =
            `${gameState.playerA} vs AI`;

    } else {

        gameState.playerA =
            playerAInput.value.trim() ||
            "Player A";

        gameState.playerB =
            playerBInput.value.trim() ||
            "Player B";

        roleDisplay.textContent =
            `${gameState.playerA} vs ${gameState.playerB}`;
    }

    updateScoreboard();

    showScreen(gameScreen);

    messageDisplay.textContent =
        "Version 3 Duel Engine Loading";
}

function updateScoreboard() {

    scoreA.textContent = gameState.scoreA;
    scoreB.textContent = gameState.scoreB;
}

function restartGame() {

    showScreen(menuScreen);
}

function finishMatch() {

    showScreen(finalScreen);

    if (gameState.scoreA > gameState.scoreB) {

        winnerText.textContent =
            `${gameState.playerA} Wins`;

    } else if (
        gameState.scoreB >
        gameState.scoreA
    ) {

        winnerText.textContent =
            `${gameState.playerB} Wins`;

    } else {

        winnerText.textContent =
            "Draw";
    }
}
