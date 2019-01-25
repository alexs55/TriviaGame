// use intervals throught the code
// create a for loop that will create the html elements oon the code
// create objects for each of the questions and make so they are displayed
// keep tally at the bottom of the screen
// have a window after every question showing right or wrong


// why the four loop is not working=  ( xxxx.text(variable) before appending)
// how to diferentiate between questions and apply different objects
// to-do, try to run intervals between questions, and styling

var correct = 0
var incorrect = 0
// keeps tally of current question
var questionNumber = 0
var number = 15
// creating intervalId to hold the interval information
var intervalId;
// to hold timer

var gameStarted = 0

var audio = new Audio("assets/images/2-67 Battle! Champion.mp3");





var questions = [{
    question: "Which one is an electric pokemon?",
    choice: ["Blastoise", "Charizard", "venusaur", "pickachu"],
    answer: "pickachu"
},
{
    question: "Which of these Pokemon can mega evolve?",
    choice: ["Sableye", "Nidoking", "Milotic", "Mismagius"],
    answer: "Sableye"
},
{
    question: "How many Gym Badges exist in the Kanto region?",
    choice: ["4", "6", "9", "8"],
    answer: "8"
},
{
    question: "What is the name of the Pokemon Center nurse?",
    choice: ['Joy', 'jenny', 'Mary', 'Nancy'],
    answer: 'Joy'
},
{
    question: "How many Pokemon have been discovered so far?",
    choice: ["983", "984", "720", "567"],
    answer: "720"
},
{
    question: "What's the most effective Poke Ball?",
    choice: ["Great Ball", "Luxury Ball", "Timer Ball", "Master Ball"],
    answer: "Master Ball"
}, {
    question: "Which of these Legendary Pokemon is known to appear randomly throughout the Johto region?",
    choice: ["Registeel", "Celebi", "Suicune", "Charizard"],
    answer: "Suicune"
}, {
    question: "Which of these is NOT an evolutionary stone?",
    choice: ["Fire Stone", "Dragon Stone", "Moon Stone", "Water Stone"],
    answer: "Dragon Stone"
}, {
    question: "Which of these Pokemon is NOT an Eeveelution?",
    choice: ["Vaporeon", "Flareon", "Flygon", "Sylveon"],
    answer: "Flygon"
}, {
    question: "Which of these is NOT an obtainable badge in the original Pokemon games?",
    choice: ["Soul Badge", "Boulder Badge", "Night Badge", "Volcano Badge"],
    answer: "Night Badge"
}]

var win = $("<div>")
var lose = $("<div>")



win.attr({
    "class": 'result',

})


win.html('<h2>You are the Pokemon Master!<h2>' + '<img src="' + "assets/images/giphy.gif" + '">')

lose.attr({
    "class": 'result',


})

lose.html('<h2>Good Try Team Rocket, You Lost!</h2>' + '<img src="' + "assets/images/team-rocket-blasting-off-again-gif-8.gif" + '">')


// to write the choices (having problems while trying to for loop the choices)
console.log(questions[questionNumber].choice[1]);
// mainfunction


function roundtable() {
    stop();
    // moves to the next question
    audio.play();
    $('screen').detach();
    $('.question').detach();
    $('.questions').detach();
    $('.jumbotron').detach();

    if (questionNumber === 10) {
        if (correct > incorrect) {
            $(".placeholder").append(win);
            stop();
            var resultTimeout = setTimeout(function () {
                location.reload();
                return;

            }, 7000)


        }
        if (incorrect > correct) {
            $(".placeholder").append(lose);
            stop();
            var resultTimeout = setTimeout(function () {
                location.reload()
                return;

            }, 7000)

        }

    }

    else {

        run();
        var qWrite = questions[questionNumber].question
        var que = $('<h2>');
        que.attr({
            "class": 'questions'
        })

        que.text(qWrite);

        $('.placeholder').append(que);



        // for loop that shows the questions on the screen
        for (var i = 0; i < 4; i++) {

            // it will call the correct question regarding the questionNumber variable
            var writeIt = questions[questionNumber].choice[i];

            var question = $("<div>")

            question.attr({
                "class": 'question',

            });
            //  to write the questions dinamically
            question.text(writeIt);
            question.css({
                "background-image": "url'www.azonano.com/images/Article_Images/ImageForArticle_4983(1).jpg'",
                // to manage how the questions and answers looks
            })

            $(".placeholder").append(question);

            // to go the next question


        }
    }

}

if (gameStarted === 0) {
    $(this).on('click', roundtable);
    gameStarted++;
}



$(document).on('click', ".question", function () {



    var answer = questions[questionNumber].answer

    if (this.innerHTML === answer) {
        correct++;
        $(".correct").text(correct);







    }

    else {
        incorrect++;


        $('.incorrect').text(incorrect);






    }
    questionNumber++;
    roundtable();


})

function checkTime() {
    incorrect++;
    $('.incorrect').text(incorrect);

    var incorrectScreen = $('<div>')
    var incorrectTitle = $('<div>')

    incorrectScreen.attr({

    })
    incorrectTitle.attr({

    })

    // need to create a function that includes these two and then waits 3 seconds
    questionNumber++;
    roundtable();



}

// decreases the timer
function run() {
    number = 15
    intervalId = setInterval(decrement, 1000);

}


function decrement() {
    number--;
    $("#timer").html("<h2>" + number + "<h2>");
    if (number === 0) {
        stop();
        checkTime();



        // run for incorrect if nothing was clicked

    }
}

// function for the result screen for three seconds

var resultTimeout = setTimeout(function () {


}, 3000)


// to run the timer, needs to be put in the original 4 loop




// stops the timer
function stop() {
    clearTimeout(intervalId);
}


