var targetNumber;
var score;
var crystalValue;
var crystalValues = [];
var crystalImages = ["./assets/images/red.png", "./assets/images/saph.png", "./assets/images/top.png", "./assets/images/em.png"];
var imageCrystal;
var wins = 0;
var losses = 0;

// Begin Modal elements and functionality 
var modal = document.getElementById('myModal');
var btn = document.getElementById("btnInst");
var span = document.getElementsByClassName("close")[0]; 

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
$(document).on("click", ".modal", function(){
    this.style.display = "none";
});
// End Modal elements and functionality

function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function populateCrystalValues(){
    crystalValues = [];
    for (var i = 0; i < 4 ; i++){
        crystalValue = generateRandomNumber(1,12);
        crystalValues.push(crystalValue);
    }
}

function startGame(){
    $("#crystals").empty();
    populateCrystalValues();  
    targetNumber = generateRandomNumber(19,120);
    score=0;
    for (var i = 0; i < crystalValues.length; i++) {
        imageCrystal = $("<img>");    
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", crystalImages[i]);
        imageCrystal.attr("data-crystalvalue", crystalValues[i]);
        $("#crystals").append(imageCrystal);
    }
    $("#random-number").text(targetNumber);
    $("#wins").text(" " + wins);
    $("#losses").text(" " + losses);
    $("#score").text(score);
}

$(document).on("click", ".crystal-image", function(){
    crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    score += crystalValue;
    $("#score").text(score);
    if (score === targetNumber) {
        wins++;
        $("#result").text(" You win!");
        startGame();
    }
    else if (score > targetNumber){
        losses++;
        $("#result").text(" You lose!");
        startGame();
    }
  });

$(document).on("ready", startGame());