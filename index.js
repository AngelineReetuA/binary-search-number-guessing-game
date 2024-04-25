// Accessing DOM
const above = document.getElementById("above");
const below = document.getElementById("below");
const num = document.getElementById("num");
const done = document.getElementById("done")
const modald = document.getElementById("doneModal").childNodes[1]
const modalc = modald.childNodes[1]
const modalb = modalc.childNodes[3]
const modalf = modalc.childNodes[5]
const refreshBtn = modalf.childNodes[1]

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

refreshBtn.addEventListener("click",()=>{
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

function finalAnswer(initialNumber) {
  let myModal = new bootstrap.Modal(document.getElementById('doneModal'), {});
  modalb.textContent = `Your age is ${initialNumber}`
  myModal.show()
}
