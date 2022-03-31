questionPaper = [{
    Question: "Who is Prime Minister of Pakistan?",
    a: "Bill gate",
    b: "Nawaz Sharif",
    c: "Shabaz Sharif",
    d: "Imran Khan",
    correct: "d"
}, {
    Question: "What comes after February?",
    a: "May",
    b: "April",
    c: "March",
    d: "January",
    correct: "c"
}, {
    Question: "What is the color of  heart?",
    a: "blue",
    b: "red",
    c: "Purple",
    d: "Yellow",
    correct: "b"
}, {
    Question: "Most popular language?",
    a: "JavaScript",
    b: "Python",
    c: "HyperText Markup Language",
    d: "StyleSheet",
    correct: "b"
}, {
    Question: "Who developed this quiz?",
    a: "Mehak",
    b: "Dennis Ratchie",
    c: "Azka, The Great",
    d: "Bill Gates",
    correct: "c"
}]
const quiz = document.getElementById("quiz");

const ans = document.querySelectorAll(".choices");

const quest = document.getElementById("questions");
const a_text = document.getElementById("a_choice");
const b_text = document.getElementById("b_choice");
const c_text = document.getElementById("c_choice");
const d_text = document.getElementById("d_choice");
const btn = document.getElementById("btnsbt");

let currentQuestion = 0;

loadQuiz();

function loadQuiz() {
    deselectAll();
    const currentQuestionData = questionPaper[currentQuestion];

    quest.innerText = currentQuestionData.Question;

    a_text.innerText = currentQuestionData.a;
    b_text.innerText = currentQuestionData.b;
    c_text.innerText = currentQuestionData.c;
    d_text.innerText = currentQuestionData.d;
}

function getSelected() {
    let answe = undefined;
    ans.forEach(an => {
        if (an.checked) {
            answe = an.id;
        }
    });
    return answe;
}
let score = 0;

function deselectAll() {
    ans.forEach(an => {
        an.checked = false;
    });
}
btn.addEventListener("click", () => {
    const ans = getSelected();
    if (ans) {
        if (ans == questionPaper[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questionPaper.length) {
            loadQuiz();
        } else {
            console.log(score)
            quiz.innerHTML = `<h2>You answered correct ${score} / ${questionPaper.length}</h2>`;
        }

    }

})
