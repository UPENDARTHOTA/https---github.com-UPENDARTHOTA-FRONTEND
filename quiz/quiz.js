const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the capital of india?",
        options: ["Chennai", "Hyderabad", "Assam", "NewDelhi"],
        correctAnswer: "NewDelhi"
    },
    {
        question: "What is the capital of Pakistan?",
        options: ["Alipur", "Karachi", "Islamabad", "Ahemedabad"],
        correctAnswer: "Karachi"
    },
    {
        question: "How many continents are there?",
        options: ["7", "6", "9", "5"],
        correctAnswer: "7"
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.querySelector('.options');
const submitBtn = document.getElementById('submitBtn');
const resultElement = document.getElementById('result');

function displayQuestion() {
    if (currentQuestion < questions.length) {
        const currentQuestionData = questions[currentQuestion];
        questionElement.textContent = `Question ${currentQuestion + 1}: ${currentQuestionData.question}`;

        optionsElement.innerHTML = '';
        currentQuestionData.options.forEach((option, index) => {
            optionsElement.innerHTML += `
                <input type="radio" name="option" id="option${index}" value="${option}">
                <label for="option${index}">${option}</label><br>
            `;
        });
    } else {
        optionsElement.innerHTML = '';
        questionElement.textContent = "Quiz completed!";
        submitBtn.style.display = "none";
        resultElement.textContent = `Your score: ${score}/${questions.length}`;
    }
}

            function checkAnswer() {
            const selectedOption = document.querySelector('input[name="option"]:checked');

             if (!selectedOption) {  
            alert('Please select an answer.');
             return;
             }

            const selectedAnswer = selectedOption.value;
            const currentQuestionData = questions[currentQuestion];
            if (selectedAnswer === currentQuestionData.correctAnswer) {
            score++;
            }

            currentQuestion++;
            displayQuestion();
            }

        displayQuestion();
