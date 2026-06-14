// ─── FIFA 26 NATIONS FLAGS ───────────────────────────────────────────────────
// All FIFA 26 member nations (country codes) used to display flag emojis
const FIFA26_FLAGS = [
    // Europe
    "🇦🇱","🇦🇩","🇦🇲","🇦🇹","🇦🇿","🇧🇾","🇧🇪","🇧🇦","🇧🇬","🇭🇷",
    "🇨🇾","🇨🇿","🇩🇰","🇪🇪","🇫🇮","🇫🇷","🇬🇪","🇩🇪","🇬🇷","🇭🇺",
    "🇮🇸","🇮🇪","🇮🇱","🇮🇹","🇰🇿","🇽🇰","🇱🇻","🇱🇮","🇱🇹","🇱🇺",
    "🇲🇹","🇲🇩","🇲🇨","🇲🇪","🇳🇱","🇲🇰","🇳🇴","🇵🇱","🇵🇹","🇷🇴",
    "🇷🇺","🇸🇲","🇷🇸","🇸🇰","🇸🇮","🇪🇸","🇸🇪","🇨🇭","🇹🇷","🇺🇦",
    "🏴󠁧󠁢󠁥󠁮󠁧󠁿","🏴󠁧󠁢󠁳󠁣󠁴󠁿","🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    // Americas
    "🇦🇷","🇧🇴","🇧🇷","🇨🇱","🇨🇴","🇪🇨","🇵🇾","🇵🇪","🇺🇾","🇻🇪",
    "🇺🇸","🇨🇦","🇲🇽","🇨🇷","🇨🇺","🇩🇴","🇸🇻","🇬🇹","🇭🇹","🇭🇳",
    "🇯🇲","🇳🇮","🇵🇦","🇹🇹",
    // Africa
    "🇩🇿","🇦🇴","🇧🇯","🇧🇼","🇧🇫","🇧🇮","🇨🇲","🇨🇻","🇨🇫","🇹🇩",
    "🇰🇲","🇨🇩","🇨🇬","🇨🇮","🇩🇯","🇪🇬","🇬🇶","🇪🇷","🇸🇿","🇪🇹",
    "🇬🇦","🇬🇲","🇬🇭","🇬🇳","🇬🇼","🇰🇪","🇱🇸","🇱🇷","🇱🇾","🇲🇬",
    "🇲🇼","🇲🇱","🇲🇷","🇲🇺","🇲🇦","🇲🇿","🇳🇦","🇳🇪","🇳🇬","🇷🇼",
    "🇸🇹","🇸🇳","🇸🇱","🇸🇴","🇿🇦","🇸🇸","🇸🇩","🇹🇿","🇹🇬","🇹🇳",
    "🇺🇬","🇿🇲","🇿🇼",
    // Asia
    "🇦🇫","🇧🇭","🇧🇩","🇧🇹","🇧🇳","🇰🇭","🇨🇳","🇮🇳","🇮🇩","🇮🇷",
    "🇮🇶","🇯🇵","🇯🇴","🇰🇼","🇰🇬","🇱🇦","🇱🇧","🇲🇾","🇲🇻","🇲🇳",
    "🇲🇲","🇳🇵","🇰🇵","🇴🇲","🇵🇰","🇵🇸","🇵🇭","🇶🇦","🇸🇦","🇸🇬",
    "🇰🇷","🇱🇰","🇸🇾","🇹🇯","🇹🇭","🇹🇱","🇹🇲","🇦🇪","🇺🇿","🇻🇳","🇾🇪",
    // Oceania
    "🇦🇺","🇫🇯","🇳🇿","🇵🇬","🇸🇧","🇻🇺"
];

function buildFlagTicker() {
    const ticker = document.getElementById("flag-ticker");
    // Triple the list so the seamless loop has plenty of content
    const all = [...FIFA26_FLAGS, ...FIFA26_FLAGS, ...FIFA26_FLAGS];
    ticker.innerHTML = all
        .map(f => `<span class="flag-item">${f}</span>`)
        .join("");
}
buildFlagTicker();

// ─── DOM REFS ─────────────────────────────────────────────────────────────────
const menuScreen    = document.getElementById("menu-screen");
const gameScreen    = document.getElementById("game-screen");
const passScreen    = document.getElementById("pass-screen");
const resultScreen  = document.getElementById("result-screen");
const finalScreen   = document.getElementById("final-screen");

const playerNameInput = document.getElementById("player-name");
const playerAInput    = document.getElementById("player-a");
const playerBInput    = document.getElementById("player-b");

const singleModeBtn = document.getElementById("single-mode-btn");
const duelModeBtn   = document.getElementById("duel-mode-btn");
const startBtn      = document.getElementById("start-btn");
const continueBtn   = document.getElementById("continue-btn");
const nextBtn       = document.getElementById("next-btn");
const restartBtn    = document.getElementById("restart-btn");

const roleDisplay      = document.getElementById("role-display");
const shotsRemaining   = document.getElementById("shots-remaining");
const messageDisplay   = document.getElementById("message");
const scoreAEl         = document.getElementById("score-a");
const scoreBEl         = document.getElementById("score-b");
const labelAEl         = document.getElementById("label-a");
const labelBEl         = document.getElementById("label-b");
const timerDisplay     = document.getElementById("timer");
const passMessage      = document.getElementById("pass-message");
const resultTitle      = document.getElementById("result-title");
const resultDetails    = document.getElementById("result-details");
const shotDirDisplay   = document.getElementById("shot-dir-display");
const keepDirDisplay   = document.getElementById("keep-dir-display");
const winnerText       = document.getElementById("winner-text");
const finalScores      = document.getElementById("final-scores");
const ratingBlock      = document.getElementById("rating-block");
const resultAnimation  = document.getElementById("result-animation");

const goalkeeper = document.getElementById("goalkeeper");
const ball       = document.getElementById("ball");

const leftBtn   = document.getElementById("left-btn");
const centerBtn = document.getElementById("center-btn");
const rightBtn  = document.getElementById("right-btn");

// ─── GAME STATE ───────────────────────────────────────────────────────────────
let countdownInterval = null;

const SHOTS_PER_PLAYER = 2;   // duel: each player takes 2
const SINGLE_SHOTS     = 5;   // single: player takes 5

const gameState = {
    mode:          "single",   // "single" | "duel"
    difficulty:    "medium",
    playerA:       "Player",
    playerB:       "AI",
    scoreA:        0,
    scoreB:        0,
    // Duel tracking: playerA shoots odd rounds, playerB shoots even rounds
    // Single: player is always shooter, AI is always keeper
    shooterChoice: "",
    keeperChoice:  "",
    // Single player
    shotsLeft:     SINGLE_SHOTS,
    // Duel player
    attempt:       1,          // 1-based; goes up to totalAttempts
    totalAttempts: SHOTS_PER_PLAYER * 2,
    phase:         "shooter",  // "keeper" | "shooter"
    timer:         5,
    // Shot history for difficulty AI
    playerHistory: [],
};

// ─── RATING TABLE (single player) ────────────────────────────────────────────
const RATINGS = [
    { min: 0, max: 0, label: "Better Luck Next Time 😅" },
    { min: 1, max: 1, label: "Beginner Striker ⚽" },
    { min: 2, max: 2, label: "Local League Player 🥈" },
    { min: 3, max: 3, label: "Skilled Finisher 🥇" },
    { min: 4, max: 4, label: "Elite Striker 🌟" },
    { min: 5, max: 5, label: "Penalty King 👑" },
];

function getRating(goals) {
    return RATINGS.find(r => goals >= r.min && goals <= r.max)?.label ?? "—";
}

// ─── SCREEN HELPERS ───────────────────────────────────────────────────────────
function hideAllScreens() {
    [menuScreen, gameScreen, passScreen, resultScreen, finalScreen]
        .forEach(s => s.classList.add("hidden"));
}

function showScreen(screen) {
    hideAllScreens();
    screen.classList.remove("hidden");
}

// ─── MENU LOGIC ───────────────────────────────────────────────────────────────
singleModeBtn.addEventListener("click", () => {
    gameState.mode = "single";
    singleModeBtn.classList.add("active");
    duelModeBtn.classList.remove("active");
    playerNameInput.classList.remove("hidden");
    playerAInput.classList.add("hidden");
    playerBInput.classList.add("hidden");
    document.getElementById("difficulty-hint").textContent = "(affects AI goalkeeper)";
});

duelModeBtn.addEventListener("click", () => {
    gameState.mode = "duel";
    duelModeBtn.classList.add("active");
    singleModeBtn.classList.remove("active");
    playerNameInput.classList.add("hidden");
    playerAInput.classList.remove("hidden");
    playerBInput.classList.remove("hidden");
    document.getElementById("difficulty-hint").textContent = "(not used in duel mode)";
});

startBtn.addEventListener("click", startMatch);
continueBtn.addEventListener("click", startShooterPhase);
nextBtn.addEventListener("click", handleNext);
restartBtn.addEventListener("click", () => showScreen(menuScreen));

leftBtn.addEventListener("click",   () => handlePlay("left"));
centerBtn.addEventListener("click", () => handlePlay("centre"));
rightBtn.addEventListener("click",  () => handlePlay("right"));

// ─── MATCH SETUP ─────────────────────────────────────────────────────────────
function startMatch() {
    gameState.difficulty = document.getElementById("difficulty").value;
    gameState.scoreA     = 0;
    gameState.scoreB     = 0;
    gameState.attempt    = 1;
    gameState.shotsLeft  = SINGLE_SHOTS;
    gameState.playerHistory = [];

    if (gameState.mode === "single") {
        gameState.playerA = playerNameInput.value.trim() || "Player";
        gameState.playerB = "AI";
    } else {
        gameState.playerA = playerAInput.value.trim()  || "Player A";
        gameState.playerB = playerBInput.value.trim()  || "Player B";
    }

    // Update scoreboard name labels
    labelAEl.textContent = gameState.playerA;
    labelBEl.textContent = gameState.mode === "single" ? "Score" : gameState.playerB;

    updateScoreboard();

    if (gameState.mode === "single") {
        startSinglePlayerTurn();
    } else {
        prepareDuelTurn();
    }
}

// ─── SINGLE-PLAYER FLOW ───────────────────────────────────────────────────────
function startSinglePlayerTurn() {
    if (gameState.shotsLeft <= 0) {
        finishMatch();
        return;
    }

    resetField();
    gameState.phase = "shooter";
    gameState.shooterChoice = "";
    gameState.keeperChoice  = "";

    // AI keeper pre-decides
    gameState.keeperChoice = generateAIChoice();

    roleDisplay.textContent    = `You are the Shooter — AI is the Goalkeeper`;
    shotsRemaining.textContent = `Shots remaining: ${gameState.shotsLeft}`;
    messageDisplay.textContent = "Take Your Shot!";

    showScreen(gameScreen);
    enableButtons(true);
    startTimer();
}

// ─── DUEL FLOW ────────────────────────────────────────────────────────────────
function prepareDuelTurn() {
    if (gameState.attempt > gameState.totalAttempts) {
        finishMatch();
        return;
    }

    resetField();
    gameState.shooterChoice = "";
    gameState.keeperChoice  = "";

    // Odd attempts → Player A shoots, Player B keeps
    // Even attempts → Player B shoots, Player A keeps
    const aIsShooter = (gameState.attempt % 2 !== 0);
    gameState.currentShooter   = aIsShooter ? gameState.playerA : gameState.playerB;
    gameState.currentGoalkeeper = aIsShooter ? gameState.playerB : gameState.playerA;

    roleDisplay.textContent    = `Shooter: ${gameState.currentShooter} | Keeper: ${gameState.currentGoalkeeper}`;
    shotsRemaining.textContent = `Attempt ${gameState.attempt} of ${gameState.totalAttempts}`;

    // Keeper goes first (secretly)
    gameState.phase = "keeper";
    messageDisplay.textContent = `${gameState.currentGoalkeeper}, choose your dive — keep it secret!`;
    showScreen(gameScreen);
    enableButtons(true);
    startTimer();
}

function startShooterPhase() {
    gameState.phase = "shooter";
    messageDisplay.textContent = `${gameState.currentShooter}, Take Your Shot!`;
    showScreen(gameScreen);
    enableButtons(true);
    startTimer();
}

// ─── INPUT HANDLER ────────────────────────────────────────────────────────────
function handlePlay(direction) {
    clearTimer();
    enableButtons(false);

    if (gameState.phase === "keeper") {
        // Duel: keeper made a choice, now pass device to shooter
        gameState.keeperChoice = direction;
        showPassScreen();
    } else {
        // Both modes: shooter has chosen
        gameState.shooterChoice = direction;
        resolveTurn();
    }
}

// ─── AI GOALKEEPER ────────────────────────────────────────────────────────────
function generateAIChoice() {
    const options  = ["left", "centre", "right"];
    const history  = gameState.playerHistory;
    const diff     = gameState.difficulty;

    if (diff === "easy" || history.length < 2) {
        // Pure random
        return options[Math.floor(Math.random() * options.length)];
    }

    // Count player's past choices
    const counts = { left: 0, centre: 0, right: 0 };
    history.forEach(h => counts[h]++);
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const mostUsed = sorted[0][0];

    if (diff === "medium") {
        // 50% chance to block most-used direction, else random
        return Math.random() < 0.5
            ? mostUsed
            : options[Math.floor(Math.random() * options.length)];
    }

    if (diff === "hard") {
        // 75% chance to block most-used direction
        return Math.random() < 0.75
            ? mostUsed
            : options[Math.floor(Math.random() * options.length)];
    }

    return options[Math.floor(Math.random() * options.length)];
}

// ─── PASS SCREEN ─────────────────────────────────────────────────────────────
function showPassScreen() {
    passMessage.textContent = `Pass the device to ${gameState.currentShooter} for the penalty kick!`;
    showScreen(passScreen);
}

// ─── RESOLVE TURN ─────────────────────────────────────────────────────────────
function resolveTurn() {
    const shot  = gameState.shooterChoice;
    const dive  = gameState.keeperChoice;

    animatePlay(shot, dive);

    // Track for AI difficulty
    if (gameState.mode === "single" && shot !== "timeout") {
        gameState.playerHistory.push(shot);
    }

    setTimeout(() => {
        const timedOut = shot === "timeout";
        const isGoal   = !timedOut && (shot !== dive);

        // Update scores
        if (gameState.mode === "single") {
            if (isGoal) gameState.scoreA++;
            gameState.shotsLeft--;
        } else {
            const aIsShooter = (gameState.attempt % 2 !== 0);
            if (isGoal) {
                if (aIsShooter) gameState.scoreA++;
                else            gameState.scoreB++;
            }
        }

        updateScoreboard();

        // Result display
        if (timedOut) {
            resultTitle.textContent = "⏰ Time's Up!";
            resultDetails.textContent = "You ran out of time — shot missed!";
        } else if (isGoal) {
            resultTitle.textContent = "🥅 GOAL!";
            resultDetails.textContent = "Perfect shot — the keeper went the wrong way!";
        } else {
            resultTitle.textContent = "❌ SAVED!";
            resultDetails.textContent = "The keeper got it — better luck next time!";
        }

        resultAnimation.textContent = timedOut ? "⏰" : isGoal ? "🎉" : "🧤";

        const dirLabel = d => d === "timeout" ? "—" : d.toUpperCase();
        shotDirDisplay.textContent = dirLabel(shot);
        keepDirDisplay.textContent = dirLabel(dive);
        shotDirDisplay.className   = "dir-badge " + (timedOut ? "" : shot);
        keepDirDisplay.className   = "dir-badge " + dive;

        showScreen(resultScreen);
    }, 900);
}

// ─── NEXT BUTTON ─────────────────────────────────────────────────────────────
function handleNext() {
    if (gameState.mode === "single") {
        if (gameState.shotsLeft <= 0) {
            finishMatch();
        } else {
            startSinglePlayerTurn();
        }
    } else {
        gameState.attempt++;
        if (gameState.attempt > gameState.totalAttempts) {
            finishMatch();
        } else {
            prepareDuelTurn();
        }
    }
}

// ─── TIMER ────────────────────────────────────────────────────────────────────
function startTimer() {
    gameState.timer = 5;
    timerDisplay.textContent = gameState.timer;
    timerDisplay.classList.remove("urgent");
    clearTimer();

    countdownInterval = setInterval(() => {
        gameState.timer--;
        timerDisplay.textContent = gameState.timer;

        if (gameState.timer <= 2) timerDisplay.classList.add("urgent");

        if (gameState.timer <= 0) {
            clearTimer();
            enableButtons(false);

            if (gameState.phase === "keeper") {
                // Keeper ran out of time — force centre dive
                gameState.keeperChoice = "centre";
                showPassScreen();
            } else {
                // Shooter ran out of time — timeout
                gameState.shooterChoice = "timeout";
                resolveTurn();
            }
        }
    }, 1000);
}

function clearTimer() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
}

// ─── ANIMATION ────────────────────────────────────────────────────────────────
function animatePlay(shotDir, diveDir) {
    // Reset transforms first, then apply positions via CSS classes
    ball.style.transition       = "left 0.5s ease, bottom 0.4s ease";
    goalkeeper.style.transition = "left 0.5s ease";

    // Ball
    if (shotDir === "left")    { ball.style.left = "22%"; }
    else if (shotDir === "right")  { ball.style.left = "78%"; }
    else                           { ball.style.left = "50%"; }

    // Also animate ball going forward (upward)
    ball.style.bottom = "80px";

    // Keeper
    if (diveDir === "left")    { goalkeeper.style.left = "22%"; }
    else if (diveDir === "right")  { goalkeeper.style.left = "78%"; }
    else                           { goalkeeper.style.left = "50%"; }
}

function resetField() {
    clearTimer();
    ball.style.transition       = "none";
    goalkeeper.style.transition = "none";
    ball.style.left       = "50%";
    ball.style.bottom     = "40px";
    goalkeeper.style.left = "50%";
    timerDisplay.classList.remove("urgent");
}

// ─── SCOREBOARD ───────────────────────────────────────────────────────────────
function updateScoreboard() {
    scoreAEl.textContent = gameState.scoreA;
    scoreBEl.textContent = gameState.mode === "single"
        ? `${SINGLE_SHOTS - gameState.shotsLeft}/${SINGLE_SHOTS}`
        : gameState.scoreB;
}

function enableButtons(state) {
    [leftBtn, centerBtn, rightBtn].forEach(b => {
        b.disabled = !state;
        b.style.opacity = state ? "1" : "0.4";
    });
}

// ─── FINISH MATCH ────────────────────────────────────────────────────────────
function finishMatch() {
    clearTimer();
    showScreen(finalScreen);

    if (gameState.mode === "single") {
        const goals    = gameState.scoreA;
        const total    = SINGLE_SHOTS;
        const accuracy = Math.round((goals / total) * 100);
        const rating   = getRating(goals);

        winnerText.textContent = `${gameState.playerA}`;
        finalScores.innerHTML  = `
            <div class="final-stat">
                <span class="stat-val">${goals}/${total}</span>
                <span class="stat-lbl">Goals Scored</span>
            </div>
            <div class="final-stat">
                <span class="stat-val">${accuracy}%</span>
                <span class="stat-lbl">Accuracy</span>
            </div>
        `;
        ratingBlock.classList.remove("hidden");
        ratingBlock.innerHTML = `<span class="rating-label">Rating</span><span class="rating-value">${rating}</span>`;

    } else {
        // Duel
        const aWins = gameState.scoreA > gameState.scoreB;
        const bWins = gameState.scoreB > gameState.scoreA;

        if (aWins) {
            winnerText.textContent = `🏆 ${gameState.playerA} Wins!`;
        } else if (bWins) {
            winnerText.textContent = `🏆 ${gameState.playerB} Wins!`;
        } else {
            winnerText.textContent = "🤝 It's a Draw!";
        }

        finalScores.innerHTML = `
            <div class="final-stat">
                <span class="stat-val">${gameState.scoreA}</span>
                <span class="stat-lbl">${gameState.playerA}</span>
            </div>
            <div class="final-stat divider">–</div>
            <div class="final-stat">
                <span class="stat-val">${gameState.scoreB}</span>
                <span class="stat-lbl">${gameState.playerB}</span>
            </div>
        `;
        ratingBlock.classList.add("hidden");
    }
}
