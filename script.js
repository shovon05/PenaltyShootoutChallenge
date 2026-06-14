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

const goalkeeper = document.getElementById("goalkeeper");
const ball = document.getElementById("ball");

// Action Buttons
const leftBtn = document.getElementById("left-btn");
const centerBtn = document.getElementById("center-btn");
const rightBtn = document.getElementById("right-btn");

let countdownInterval;

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
    totalAttempts: 4, // 2 shots each
    phase: "", 
    timer: 5
};

// --- MENU LOGIC ---
singleModeBtn.addEventListener("click", () => {
    gameState.mode = "single";
    playerNameInput.classList.remove("hidden");
    playerAInput.classList.add("hidden");
    playerBInput.classList.add("hidden");
});

duelModeBtn.addEventListener("click", () => {
    gameState.mode = "duel";
    playerNameInput.classList.add("hidden");
    playerAInput.classList.remove("hidden");
    playerBInput.classList.remove("hidden");
});

startBtn.addEventListener("click", startMatch);
continueBtn.addEventListener("click", startShooterPhase);
nextBtn.addEventListener("click", prepareNextTurn);
restartBtn.addEventListener("click", () => showScreen(menuScreen));

leftBtn.addEventListener("click", () => handlePlay("left"));
centerBtn.addEventListener("click", () => handlePlay("center"));
rightBtn.addEventListener("click", () => handlePlay("right"));

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

// --- GAME LOOP LOGIC ---
function startMatch() {
    gameState.scoreA = 0;
    gameState.scoreB = 0;
    gameState.attempt = 1;
    gameState.difficulty = document.getElementById("difficulty").value;

    if (gameState.mode === "single") {
        gameState.playerA = playerNameInput.value.trim() || "Player";
        gameState.playerB = "AI";
    } else {
        gameState.playerA = playerAInput.value.trim() || "Player A";
        gameState.playerB = playerBInput.value.trim() || "Player B";
    }

    updateScoreboard();
    prepareNextTurn();
}

function prepareNextTurn() {
    if (gameState.attempt > gameState.totalAttempts) {
        finishMatch();
        return;
    }

    resetField();

    // Determine roles based on attempt number
    if (gameState.attempt % 2 !== 0) {
        gameState.shooter = gameState.playerA;
        gameState.goalkeeper = gameState.playerB;
    } else {
        gameState.shooter = gameState.playerB;
        gameState.goalkeeper = gameState.playerA;
    }

    roleDisplay.textContent = `Shooter: ${gameState.shooter} | Keeper: ${gameState.goalkeeper}`;

    if (gameState.mode === "single") {
        gameState.phase = "shooter";
        messageDisplay.textContent = `${gameState.shooter}, Take Your Shot!`;
        generateAIChoice();
        showScreen(gameScreen);
        startTimer();
    } else {
        gameState.phase = "keeper";
        messageDisplay.textContent = `${gameState.goalkeeper}, Choose Your Dive Direction! (Secretly)`;
        showScreen(gameScreen);
        startTimer();
    }
}

function startShooterPhase() {
    gameState.phase = "shooter";
    messageDisplay.textContent = `${gameState.shooter}, Take Your Shot!`;
    showScreen(gameScreen);
    startTimer();
}

function handlePlay(direction) {
    clearInterval(countdownInterval);

    if (gameState.phase === "keeper") {
        gameState.keeperChoice = direction;
        showPassScreen();
    } else if (gameState.phase === "shooter") {
        gameState.shooterChoice = direction;
        resolveTurn();
    }
}

function generateAIChoice() {
    const options = ["left", "center", "right"];
    // Simple AI for now: completely random regardless of difficulty. 
    // You can expand this logic later!
    gameState.keeperChoice = options[Math.floor(Math.random() * options.length)];
}

function showPassScreen() {
    passMessage.textContent = `Pass the device to ${gameState.shooter} for the penalty kick!`;
    showScreen(passScreen);
}

function resolveTurn() {
    animatePlay(gameState.shooterChoice, gameState.keeperChoice);

    setTimeout(() => {
        let isGoal = gameState.shooterChoice !== gameState.keeperChoice;
        
        if (gameState.shooterChoice === "timeout") {
            isGoal = false;
            resultTitle.textContent = "⏰ Time Out!";
        } else if (isGoal) {
            resultTitle.textContent = "🥅 GOAL!";
            if (gameState.shooter === gameState.playerA) gameState.scoreA++;
            if (gameState.shooter === gameState.playerB) gameState.scoreB++;
        } else {
            resultTitle.textContent = "❌ SAVED!";
        }

        updateScoreboard();
        
        resultDetails.textContent = `Shooter went ${gameState.shooterChoice.toUpperCase()}, Keeper dove ${gameState.keeperChoice.toUpperCase()}`;
        showScreen(resultScreen);
        
        gameState.attempt++;
    }, 1000); // Wait for animation
}

// --- TIMER & ANIMATION ---
function startTimer() {
    gameState.timer = 5;
    timerDisplay.textContent = gameState.timer;
    clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        gameState.timer--;
        timerDisplay.textContent = gameState.timer;

        if (gameState.timer <= 0) {
            clearInterval(countdownInterval);
            if (gameState.phase === "keeper") {
                // If keeper runs out of time, force them center
                gameState.keeperChoice = "center";
                showPassScreen();
            } else if (gameState.phase === "shooter") {
                gameState.shooterChoice = "timeout";
                resolveTurn();
            }
        }
    }, 1000);
}

function animatePlay(shotDir, diveDir) {
    // Ball Animation
    if (shotDir === "left") ball.style.left = "25%";
    else if (shotDir === "right") ball.style.left = "75%";
    else if (shotDir === "center") ball.style.left = "50%"; // Center
    
    // Keeper Animation
    if (diveDir === "left") goalkeeper.style.left = "25%";
    else if (diveDir === "right") goalkeeper.style.left = "75%";
    else if (diveDir === "center") goalkeeper.style.left = "50%";
}

function resetField() {
    ball.style.left = "50%";
    goalkeeper.style.left = "50%";
    ball.style.transform = "translateX(-50%)";
    goalkeeper.style.transform = "translateX(-50%)";
}

function updateScoreboard() {
    scoreA.textContent = gameState.scoreA;
    scoreB.textContent = gameState.scoreB;
}

function finishMatch() {
    showScreen(finalScreen);

    if (gameState.scoreA > gameState.scoreB) {
        winnerText.textContent = `${gameState.playerA} Wins!`;
    } else if (gameState.scoreB > gameState.scoreA) {
        winnerText.textContent = `${gameState.playerB} Wins!`;
    } else {
        winnerText.textContent = "It's a Draw!";
    }
}
