console.log("octopus cather");

let octo = document.querySelector("#octo");
let score = 0;
let timeElapsed = 0;
let timer = window.setInterval(moveOcto, 1000);
let secondsGone = document.querySelector("#secondsGone");
let endMessage = document.querySelector("#endMessage");
let scoreText = document.querySelector("#scoreText"); 


scoreText.innerText = "0";



function moveOcto() {
    timeElapsed = timeElapsed + 1; 
    octo.style.left = Math.random()*1000+"px";
    octo.style.top = Math.random()*500 + "px";
    secondsGone.innerText = timeElapsed;

    if (timeElapsed == 30){
        clearInterval(timer); 
        endMessage.innerText = "Time Up! You Socred: " + score;               
    }
}

function caughtOcto() {    
    score++ ;
    scoreText.innerText =  score; 
}



octo.addEventListener("mousedown", caughtOcto);



