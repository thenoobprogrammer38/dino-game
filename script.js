var character = document.getElementById("character");
var block = document.getElementById("block");
var scoreBoard = document.getElementById("score");
var score = 0;


alert("Dino Game\n\nTry to avoid the block of obstacles in your poathway. This is an easy peezy game! If u score below 50, ur such a nooob!")

function jump() {
    console.log("jump");
    if (character.classList != "callback") {
        character.classList.add("callback");
    }
    setTimeout(function () {
        character.classList.remove("callback");
    }, 600);
}

//add event listener
document.addEventListener("keydown", function(){
    if (event.keyCode == 38 || event.keyCode == 32){
        jump();
    }
})

var gameOver = setInterval(function(){
    var charPos = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockPos = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockPos < 40 && blockPos > 0 && charPos > 95){
        alert("Game Over\nTotal Score: " + Math.floor(score/130));
        block.style.animation = "none";
        block.style.display = "none";
        location.reload();
    } else{
        score++;
    }
    scoreBoard.innerHTML = "Score: " + Math.floor(score/130);
}, 10);
