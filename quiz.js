function check() {

    var pytanie1 = document.quiz.pytanie1.value;
    var pytanie2 = document.quiz.pytanie2.value;
    var pytanie3 = document.quiz.pytanie3.value;
    var pytanie4 = document.quiz.pytanie4.value;
    var correct = 0;

    if (pytanie1 == "FPS") {
        correct++;
    }
    if (pytanie2 == "2018") {
        correct++;
    }
    if (pytanie3 == "Blizzard") {
        correct++;
    }
    if (pytanie4 == "Vulture") {
        correct++;
    }


    var messages = ["Spróbuj jeszcze raz", "Udało się!"];
    var score;

    if(correct<4) {
        score = 0;
    }

    if(correct==4){
        score = 1;
    }



    document.getElementById("message").innerHTML = messages[score];

}