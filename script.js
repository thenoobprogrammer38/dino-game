var character = document.getElementById("character");
var block = document.getElementById("block");
var scoreBoard = document.getElementById("score");
var score = 0;

function jump() {
    console.log("jump");
    if (character.classList != "callback") {
        character.classList.add("callback");
    }
    setTimeout(function () {
        character.classList.remove("callback");
    }, 600);
}

var gameOver = setInterval(function(){
    var charPos = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockPos = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockPos < 40 && blockPos > 0 && charPos > 95){
        alert("Game Over");
        block.style.animation = "none";
        block.style.display = "none";
        location.reload()
    } else{
        score++;
    }
    scoreBoard.innerHTML = "Score: " + Math.floor(score/130);
}, 10);