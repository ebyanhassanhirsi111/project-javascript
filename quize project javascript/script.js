let questions = [
    { q: "JavaScript waa maxay?", o: ["HTML", "Dynamic Programming Language", "Database", "OS"], a: 1 },
    { q: "DOM maxay ka dhigan tahay?", o: ["Document Object Model", "Data Output Mode", "Design Order Map", "None"], a: 0 },
    { q: "Which is NOT JS datatype?", o: ["String", "Boolean", "Number", "Float"], a: 3 },
    { q: "JavaScript waxa lagu isticmaalaa?", o: ["Styling", "Logic", "Database", "Design only"], a: 1 },
    { q: "Which keyword creates variable?", o: ["var", "int", "string", "float"], a: 0 },
    { q: "Array waa maxay?", o: ["Single value", "Multiple values", "Function", "Loop"], a: 1 },
    { q: "Function maxay qabataa?", o: ["Stores data", "Repeats code", "Executes task", "Styles page"], a: 2 },
    { q: "Which is loop?", o: ["if", "for", "switch", "break"], a: 1 },
    { q: "JS file extension?", o: [".html", ".css", ".js", ".java"], a: 2 },
    { q: "Event listener maxaa loo adeegsadaa?", o: ["Styling", "User interaction", "Database", "Animation"], a: 1 }
];

//
let index = 0;
let score = 0;

//select elements
const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const quizBox = document.getElementById("quizBox");


//function control
function loadQuestion() {
    let current = questions[index];
    question.textContent = current.q;
    options.innerHTML = "";

    current.o.forEach((opt, i) => {
        let label = document.createElement("label");
        let input = document.createElement("input");

        input.type = "radio";
        input.name = "answer";
        input.value = i ;

        // click event
       input.addEventListener("click", () => {
            let labels = options.querySelectorAll("label")
            labels.forEach(label => {
                label.style.background = ""
            });
        input.parentElement.style.background = "rgb(221, 221, 249)";
    });


      label.appendChild(input); 
      label.append(" " + opt);
      options.appendChild(label);
      options.appendChild(document.createElement("br"));
    });
}

loadQuestion();

// validation
nextBtn.addEventListener("click", () => {
    let selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("Fadlan dooro jawaab kahor intaadan Next riixin");
        return;
    }

    let answer = parseInt(selected.value);
    if (answer === questions[index].a) {
        score++;
    }

    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

//result
function showResult() {
  quizBox.innerHTML = `
      <h2>Quiz Completed 🎉</h2>
       <p><strong>Total Score:</strong> ${score} / ${questions.length}</p>
       <p>performance : ${score >= 7? "excellence" : score >=4 ? "good":"needs more practice"}</p>
    `;

}

