const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

//Monkey Patching
Array.prototype.sample = function() {
  return this[~~(Math.random() * this.length)];
}

//Functions
function appendQuestion(question) {
  document.querySelector('.question-container').innerHTML = question.questionText
}

function askQuestionThen(time)  {
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(question)
    }, time )
  })
}

function removeQuestion() {
  document.querySelector('.question-container').innerHTML = ""
}

function askQuestionThenRemoveQuestion(time)  {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons()  {
  return [...document.querySelector(".true-false-list").children]
}

function toggleTrueAndFalseButtons()  {
  for(const btn of trueAndFalseButtons()) {
    console.log(trueAndFalseButtons().length)
    if (btn.classList.contains("hide")) {
      btn.classList.remove("hide")
    } else {
      btn.classList.add("hide")
    }
  }
}

function displayQuestionOnClick() {
  toggleTrueAndFalseButtons(); 
  document.querySelector("div > a").addEventListener("click", () => {askQuestionThenRemoveQuestion(2000)})
  toggleTrueAndFalseButtons(); 
}

