const quizContainer = document.getElementById('quiz');
        const resultsContainer = document.getElementById('results');

        const myQuestions = [
            {
                question: "Qual é a raiz quadrada do 81?",
                answers: {
                    a: "9",
                    b: "7",
                    c: "6",
                    d: "8"
                },
                correctAnswer: "a"
            },
            {
                question: "Qual é a raiz quadrada de 49?",
                answers: {
                    a: "8",
                    b: "7",
                    c: "9",
                    d: "17"
                },
                correctAnswer: "b"
            },
            {
                question: "Qual é a raiz quadrada de 64?",
                answers: {
                    a: "7",
                    b: "623",
                    c: "8",
                    d: "9"
                },
                correctAnswer: "c"
            },
            {
                question: "Qual é a raiz quadrada de 36?",
                answers: {
                    a: "500000",
                    b: "40000",
                    c: "3000",
                    d: "200"
                       },
                correctAnswer: "d"
            },
        ];
        
        function showQuiz() {
            myQuestions.forEach((currentQuestion, questionNumber) => {
                const answers = [];
                for(letter in currentQuestion.answers){
                    answers.push(
                        `<label>
                            <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                        </label>`
                    );
                }
                quizContainer.innerHTML += `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`;
            });
        }

        function getResults() {
            let numCorrect = 0;
            myQuestions.forEach((currentQuestion, questionNumber) => {
                const answerContainer = quizContainer.querySelectorAll('.answers')[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;
                if(userAnswer === currentQuestion.correctAnswer){
                    numCorrect++;
                }
            });
            resultsContainer.innerHTML = `Você acertou ${numCorrect} de ${myQuestions.length} perguntas.`;
        }

        showQuiz();