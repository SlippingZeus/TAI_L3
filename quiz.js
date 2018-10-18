(function() {
    const myQuestions = [
        {
            question: "1. Jakiego typu grą jest Call of Duty?",
            answers: {
                a: "FPS",
                b: "MMORPG",
                c: "Zręcznościowa",
                d: "Logiczna"
            },
            correctAnswer: "a"
        },
        {
            question: "2. W którym roku powstała gra Red Dead Redemption 2?",
            answers: {
                a: "2015",
                b: "2018",
                c: "2017",
                d: "2016"
            },
            correctAnswer: "b"
        },
        {
            question: "3. Kto jest odpowiedzialny za powstanie gry World of Warcraft?",
            answers: {
                a: "Ubisoft",
                b: "EA",
                c: "Naughty Dog",
                d: "Blizzard"
            },
            correctAnswer: "d"
        },
        {
            question: "4. Kto jest głównym przeciwnikiem Spidermana w filmie Spiderman: Homecoming?",
            answers: {
                a: "Rhino",
                b: "Vulture",
                c: "Green Goblin",
                d: "Electro"
            },
            correctAnswer: "b"
        },
        {
            question: "5. Kto jest głównym złoczyńcą w grze Far Cry 4",
            answers: {
                a: "Hoyt Volker",
                b: "Vaas Montenegro",
                c: "Pagan Min",
                d: "Grant Brody"
            },
            correctAnswer: "c"
        },
        {
            question: "6. Kto tworzy grę pod tytułem 'Cyberpunk'?",
            answers: {
                a: "Blizzard",
                b: "EA",
                c: "CD Projekt",
                d: "Ubisoft"
            },
            correctAnswer: "c"
        },
        {
            question: "7. Która z tych gier należy do EA?",
            answers: {
                a: "Call of Duty Modern Warfare",
                b: "The Sims 4",
                c: "The Last of Us",
                d: "God of War"
            },
            correctAnswer: "b"
        },
        {
            question: "8. Jak nazywa się najpopularniejsza strona o grach w Polsce?",
            answers: {
                a: "www.gram.pl",
                b: "www.gry-online.pl",
                c: "www.gry.pl",
                d: "www.gierki.pl"
            },
            correctAnswer: "b"
        },
        {
            question: "Jak nazywa się strona w Polsce zajmująca się głównie tematyką konsol?",
            answers: {
                a: "www.gram.pl",
                b: "www.ppe.pl",
                c: "www.konsoleigry.pl",
                d: "www.konsole.pl"
            },
            correctAnswer: "b"
        },
        {
            question: "Jak nazywa się najpopularniejsza platforma z grami na świecie?",
            answers: {
                a: "Origin",
                b: "U-Play",
                c: "Playstation Network",
                d: "Steam"
            },
            correctAnswer: "d"
        }
    ];

    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `Masz : ${numCorrect} poprawnych odpowiedzi`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();


function move() {
    const elem = document.getElementById("myBar");
    let value = document.querySelector("#myBar").innerHTML;
    let width = parseInt(value);
    let id = setInterval(frame, 10);
    function frame() {
        if (width <= 90) {
            console.log("width ", width);
            clearInterval(id);
            width += 10;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1  + '%';
        } else {
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }


}
