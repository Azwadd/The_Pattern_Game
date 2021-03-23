// Global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// Global Variables
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var pattern = [1,2,3,4,5,6,7,8];
var progress = 0;
var gamePlaying = false;
var guessCounter = 0;
var clueHoldTime = 1000;
var numberOfMistakes = 2;
var timer;
var timeInterval;

function randomPattern(pattern) {
  for (var i = 0; i < 7; ++i) {
    pattern[i] = Math.floor(Math.random() * 8)+1;
  }
}

function startGame() {
  //initialize game variables
  timeInterval = 3000;
  randomPattern(pattern);
  progress = 0;
  clueHoldTime = 1000;
  gamePlaying = true;
  numberOfMistakes = 2;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence(clueHoldTime);
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  clueHoldTime -= 90;
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  timeInterval += 1000;
  timer = setInterval(loseGame, timeInterval);
}

function winGame() {
  clearInterval(timer);
  stopGame();
  alert("Game Over. You won!");
}

function loseGame() {
  clearInterval(timer);
  stopGame();
  alert("Game Over. You Lost.");
}

function guess(btn) {
  if (!gamePlaying) {
    return;
  } else {
    clearInterval(timer);
  }
  // Check if guess is wrong otherwise progress game or win game
  if (pattern[guessCounter] != btn) {
     if (numberOfMistakes == 0) {
      loseGame();
    } else { numberOfMistakes--; }
  } else {
     if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame(); // guess is correct and progress = end of pattern so user wins!
      } else {
        progress++; // Guess is current continue
        playClueSequence();
      }
    } else { guessCounter++; }
  } 
}

// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 431,
  3: 304,
  4: 378,
  5: 339,
  6: 421,
  7: 221,
  8: 399
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);