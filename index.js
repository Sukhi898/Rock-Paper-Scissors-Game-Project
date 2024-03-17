let YOURSCORE = 0;
let COMPUTERSCORE = 0;

const setyourScoretoLocal = () => {
  localStorage.setItem("YOURSCORE", YOURSCORE.toString());
  localStorage.setItem("COMPUTERSCORE", COMPUTERSCORE.toString());
};

const getScorefromLocal = () => {
  const yourScoreFromStorage = localStorage.getItem("YOURSCORE");
  const computerScoreFromStorage = localStorage.getItem("COMPUTERSCORE");

  if (yourScoreFromStorage !== null) {
    YOURSCORE = parseInt(yourScoreFromStorage);
    setyourScore(YOURSCORE);
  }

  if (computerScoreFromStorage !== null) {
    COMPUTERSCORE = parseInt(computerScoreFromStorage);
    setComputerScore(COMPUTERSCORE);
  }
};

const updateScore = () => {
  setyourScoretoLocal();
};

function openrules() {
  const box = document.querySelector("#game-rules");
  box.style.display = "flex";
  const close = document.getElementById("close-btn");
  close.style.display = "block";
}

function closerules() {
  const close = document.getElementById("close-btn");
  close.style.display = "none";
  const box = document.getElementById("game-rules");
  console.log(close);
  box.style.display = "none";
}
const ImageURLS = {
  rock: "/images/first.png",
  scissor: "/images/second.png",
  paper: "/images/third.png",
};
const userPicked = (hand) => {
  const hands = document.querySelector(".icons");
  hands.style.display = "none";

  const screen2 = document.querySelector("#second-screen");
  screen2.style.display = "flex";

  const userPickedImage = document.querySelector("#userpickedImage");
  userPickedImage.src = ImageURLS[hand];

  if (hand === "rock") {
    userPickedImage.style.border = "12px solid #0074b6";
  } else if (hand === "scissor") {
    userPickedImage.style.border = "12px solid #bd00ff";
  } else if (hand === "paper") {
    userPickedImage.style.border = "12px solid #ffa943";
  }

  const effect4 = document.querySelector("#layer4");
  effect4.style.display = "none";
  const effect5 = document.querySelector("#layer5");
  effect5.style.display = "none";
  const effect6 = document.querySelector("#layer6");
  effect6.style.display = "none";
  const effect1 = document.querySelector("#layer1");
  effect1.style.display = "none";
  const effect2 = document.querySelector("#layer2");
  effect2.style.display = "none";
  const effect3 = document.querySelector("#layer3");
  effect3.style.display = "none";
  let randomimg = randomImage();
  decisionMaker(randomimg, hand);
  document.querySelector("#play-again").style.display = "block";
};

const randomImage = () => {
  const imgs = ["rock", "paper", "scissor"];

  const randomsrc = imgs[Math.floor(Math.random() * 3)];

  const computerPickedImage = document.querySelector("#computerpickedImage");
  computerPickedImage.src = ImageURLS[randomsrc];

  if (randomsrc === "rock") {
    computerPickedImage.style.border = "12px solid #0074b6";
  } else if (randomsrc === "scissor") {
    computerPickedImage.style.border = "12px solid #bd00ff";
  } else if (randomsrc === "paper") {
    computerPickedImage.style.border = "12px solid #ffa943";
  }

  return randomsrc;
};

const decisionMaker = (randomsrc, hand) => {
  console.log(randomsrc, hand);
  if (hand == "paper" && randomsrc == "paper") {
    console.log("It's a tie");

    const tieMatch = document.querySelector("#tie");
    tieMatch.style.display = "flex";
    const loseMatch = document.querySelector(".lost");
    loseMatch.style.display = "none";
    const WonMatch = document.querySelector(".won");
    WonMatch.style.display = "none";
    const nextBtn = document.querySelector("#next-btn");
    nextBtn.style.display = "none";
  }
  if (hand == "paper" && randomsrc == "scissor") {
    console.log("You lose");
    const tieMatch = document.querySelector("#tie");
    tieMatch.style.display = "none";
    const WonMatch = document.querySelector(".won");
    WonMatch.style.display = "none";
    const loseMatch = document.querySelector(".lost");
    loseMatch.style.display = "flex";

    const effect4 = document.querySelector("#layer4");
    effect4.style.display = "flex";
    const effect5 = document.querySelector("#layer5");
    effect5.style.display = "flex";
    const effect6 = document.querySelector("#layer6");
    effect6.style.display = "flex";
    const closebtn = document.querySelector("#close-btn");
    closebtn.style.right = "0px";
    const gamerules = document.querySelector("#game-rules");
    gamerules.style.position = "absolute";
    gamerules.style.bottom = "60px";
    gamerules.style.right = "7px";

    const nextBtn = document.querySelector("#next-btn");
    nextBtn.style.display = "none";
    setComputerScore(COMPUTERSCORE + 1);
  }
  if (hand == "paper" && randomsrc == "rock") {
    console.log("You won");
    const tieMatch = document.querySelector("#tie");
    tieMatch.style.display = "none";
    const WonMatch = document.querySelector(".won");
    WonMatch.style.display = "flex";
    const loseMatch = document.querySelector(".lost");
    loseMatch.style.display = "none";
    const effect1 = document.querySelector("#layer1");
    effect1.style.display = "flex";
    const effect2 = document.querySelector("#layer2");
    effect2.style.display = "flex";
    const effect3 = document.querySelector("#layer3");
    effect3.style.display = "flex";

    const nextBtn = document.querySelector("#next-btn");
    nextBtn.style.display = "flex";
    const rulesBtn = document.querySelector("#rules-btn");
    rulesBtn.style.right = "154px";

    setyourScore(YOURSCORE + 1);
  }
  if (hand == "rock" && randomsrc == "scissor") {
    console.log("You won");
    const tieMatch = document.querySelector("#tie");
    tieMatch.style.display = "none";
    const WonMatch = document.querySelector(".won");
    WonMatch.style.display = "flex";
    const loseMatch = document.querySelector(".lost");
    loseMatch.style.display = "none";
    const effect1 = document.querySelector("#layer1");
    effect1.style.display = "flex";
    const effect2 = document.querySelector("#layer2");
    effect2.style.display = "flex";
    const effect3 = document.querySelector("#layer3");
    effect3.style.display = "flex";
    const nextBtn = document.querySelector("#next-btn");
    nextBtn.style.display = "flex";
    const rulesBtn = document.querySelector("#rules-btn");
    rulesBtn.style.right = "154px";

    setyourScore(YOURSCORE + 1);
  }
  if (hand == "rock" && randomsrc == "paper") {
    console.log("You lose");
    const tieMatch = document.querySelector("#tie");
    tieMatch.style.display = "none";
    const WonMatch = document.querySelector(".won");
    WonMatch.style.display = "none";
    const loseMatch = document.querySelector(".lost");
    loseMatch.style.display = "flex";
    const nextBtn = document.querySelector("#next-btn");
    nextBtn.style.display = "none";
    const effect4 = document.querySelector("#layer4");
    effect4.style.display = "flex";
    const effect5 = document.querySelector("#layer5");
    effect5.style.display = "flex";
    const effect6 = document.querySelector("#layer6");
    effect6.style.display = "flex";
    const closebtn = document.querySelector("#close-btn");
    closebtn.style.right = "0px";

    const gamerules = document.querySelector("#game-rules");
    gamerules.style.position = "absolute";
    gamerules.style.bottom = "60px";
    gamerules.style.right = "7px";

    setComputerScore(COMPUTERSCORE + 1);
  }
  if (hand == "rock" && randomsrc == "rock") {
    console.log("It's a tie");

    const tieMatch = document.querySelector("#tie");
    tieMatch.style.display = "flex";

    const loseMatch = document.querySelector(".lost");
    loseMatch.style.display = "none";
    const WonMatch = document.querySelector(".won");
    WonMatch.style.display = "none";
    const nextBtn = document.querySelector("#next-btn");
    nextBtn.style.display = "none";
  }
  if (hand == "scissor" && randomsrc == "scissor") {
    console.log("It's a tie");
    const tieMatch = document.querySelector("#tie");
    tieMatch.style.display = "flex";
    const loseMatch = document.querySelector(".lost");
    loseMatch.style.display = "none";
    const WonMatch = document.querySelector(".won");
    WonMatch.style.display = "none";
    const nextBtn = document.querySelector("#next-btn");
    nextBtn.style.display = "none";
  }
  if (hand == "scissor" && randomsrc == "paper") {
    console.log("You won");
    const tieMatch = document.querySelector("#tie");
    tieMatch.style.display = "none";
    const WonMatch = document.querySelector(".won");
    WonMatch.style.display = "flex";
    const loseMatch = document.querySelector(".lost");
    loseMatch.style.display = "none";

    const effect1 = document.querySelector("#layer1");
    effect1.style.display = "flex";
    const effect2 = document.querySelector("#layer2");
    effect2.style.display = "flex";
    const effect3 = document.querySelector("#layer3");
    effect3.style.display = "flex";

    const nextBtn = document.querySelector("#next-btn");
    nextBtn.style.display = "flex";
    const rulesBtn = document.querySelector("#rules-btn");
    rulesBtn.style.right = "154px";

    setyourScore(YOURSCORE + 1);
  }
  if (hand == "scissor" && randomsrc == "rock") {
    console.log("You lose");
    const tieMatch = document.querySelector("#tie");
    tieMatch.style.display = "none";
    const WonMatch = document.querySelector(".won");
    WonMatch.style.display = "none";

    const loseMatch = document.querySelector(".lost");
    loseMatch.style.display = "flex";

    const effect4 = document.querySelector("#layer4");
    effect4.style.display = "flex";
    const effect5 = document.querySelector("#layer5");
    effect5.style.display = "flex";
    const effect6 = document.querySelector("#layer6");
    effect6.style.display = "flex";
    const nextBtn = document.querySelector("#next-btn");
    nextBtn.style.display = "none";
    const closebtn = document.querySelector("#close-btn");
    closebtn.style.right = "0px";
    const gamerules = document.querySelector("#game-rules");
    gamerules.style.position = "absolute";
    gamerules.style.bottom = "60px";
    gamerules.style.right = "7px";

    setComputerScore(COMPUTERSCORE + 1);
  }
};

const setComputerScore = (Score) => {
  const Comscore = document.querySelector("#Score1");
  Comscore.innerHTML = Score;
  COMPUTERSCORE = Score;
  updateScore();
};

const setyourScore = (Score) => {
  const yourScore = document.querySelector("#Score2");
  yourScore.innerHTML = Score;
  YOURSCORE = Score;
  updateScore();
};

const resetGame = () => {
  const screen2 = document.querySelector("#second-screen");
  screen2.style.display = "none";
  const icons = document.querySelector(".icons");
  icons.style.display = "flex";
  const firstBanner = document.querySelector("#first-banner");
  firstBanner.style.display = "flex";
  document.querySelector("#stars").style.display = "none";
  document.querySelector("#trophy").style.display = "none";
  document.querySelector(".winner").style.display = "none";
  const rulesbtn = document.querySelector("#rules-btn");
  rulesbtn.classList.remove("temp-position-rulesbtn");
  const playButton = document.querySelector("#play-again");
  playButton.style.display = "none";
  playButton.style.top = "352px";
  playButton.style.left = "579px";
  const closebtn = document.querySelector("#close-btn");
  closebtn.style.bottom = "356px";
  const gamerules = document.querySelector("#game-rules");
  gamerules.style.position = "absolute";
  gamerules.style.bottom = "60px";
  getScorefromLocal(); // Call getScorefromLocal function to retrieve scores from local storage
};

const nextButton = () => {
  const hands = document.querySelector(".icons");
  hands.style.display = "none";
  const screen2 = document.querySelector("#second-screen");
  screen2.style.display = "none";
  const firstBanner = document.querySelector("#first-banner");
  firstBanner.style.display = "none";
  document.querySelector("#stars").style.display = "flex";
  document.querySelector("#trophy").style.display = "flex";
  document.querySelector(".winner").style.display = "flex";
  const rulesbtn = document.querySelector("#rules-btn");
  rulesbtn.classList.add("temp-position-rulesbtn");
  const playButton = document.querySelector("#play-again");
  console.log(playButton);
  playButton.style.display = "block";
  playButton.style.top = "451px";
  playButton.style.left = "579px";
  const closebtn = document.querySelector("#close-btn");
  closebtn.style.bottom = "248px";
  const gamerules = document.querySelector("#game-rules");
  gamerules.style.position = "fixed";
  gamerules.style.bottom = "68px";
};

document.addEventListener("DOMContentLoaded", () => {
  resetGame(); // Call resetGame function to initialize UI and retrieve scores from local storage
});
