// Accessing DOM
const buttons = document.getElementById("buttons")
const show = document.getElementById("show")
const above = document.getElementById("above");
const below = document.getElementById("below");
const num = document.getElementById("num");
const done = document.getElementById("done")
const winB = document.getElementById("winB")

// Initial number
let initialNumber = 64;
num.textContent = initialNumber;

// Temporary variables
let lastAbove = 0;
let lastBelow = 0;
let nextNum = 0;
let noOfTries = 0;

// If user press above first, set lastBelow = 64 and lastAbove = lastBelow + 30
above.addEventListener("click", () => {
  lastBelow = initialNumber;
  if (noOfTries === 0){
    console.log("first try above")
    lastAbove = lastBelow + 30;
  }
  console.log(noOfTries,"TRY")
  console.log("Above button "+lastAbove+lastBelow)
  initialNumber = calculateNextNumber(lastAbove, lastBelow);
});

below.addEventListener("click", () => {
  lastAbove = initialNumber;
  // how to set lastBelow 
  console.log("Below button "+lastAbove+lastBelow)
  initialNumber = calculateNextNumber(lastAbove, lastBelow);
});

done.addEventListener("click",()=>{
  finalAnswer(initialNumber)
})

winB.addEventListener("click",()=>{
  location.reload()
})

function calculateNextNumber(lastAbove, lastBelow) {
  // Calculation & display of nextNum
  const sum = Math.floor(lastAbove + lastBelow);
  const nextNum = Math.floor(sum / 2);
  num.textContent = nextNum;

  // Setting of variables
  initialNumber = nextNum;
  noOfTries = noOfTries + 1;
  console.log(noOfTries+"    "+nextNum);

  // Check if tries === 6
  if (noOfTries >= 6) {
    finalAnswer(initialNumber);
  }

  return initialNumber;
}

function popConfetti() {
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 },
  });
}

function finalAnswer(initialNumber) {
  buttons.style.display = "none"
  winB.style.display = "block"
  show.style.display = "block"
  popConfetti()
}
