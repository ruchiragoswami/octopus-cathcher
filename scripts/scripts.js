console.log("octopus cather");

let octo = document.querySelector("#octo");
let timer = window.setInterval(moveOcto, 1000);
let secondsGone = document.querySelector("#secondsGone");
let endMessage = document.querySelector("#endMessage");
let scoreText = document.querySelector("#scoreText"); 
let disctractOcto = document.querySelector("#distract");


let score = 0;
let timeElapsed = 0;
disctractOcto.style.visibility='hidden'; 




scoreText.innerText = "0";
secondsGone.innerText = "0"; 

function caughtOcto() {    
    score = score + 1 ;
    scoreText.innerText =  score; 
    console.log(score); 
}

function moveOcto() {
    timeElapsed = timeElapsed + 1; 
    octo.style.left = Math.ceil(Math.random()*1000)+"px";
    octo.style.top = Math.ceil(Math.random()*800) + "px";
    secondsGone.innerText = timeElapsed;

    if (timeElapsed >15 && timeElapsed <18 ) {
        disctractOcto.style.visibility = "visible";    
    } else if (timeElapsed == 30){
        clearInterval(timer); 
        endMessage.innerText = "Time Up! You Socred: " + score; 
        disctractOcto.style.visibility = "visible";
    }   
    else {
        disctractOcto.style.visibility = "hidden";
    }

    
}





octo.addEventListener("mousedown", caughtOcto);



// } else if (timeElapsed >22 || timeElapsed < 25) {
        // disctractOcto.style.visibility = 'visible';
        // disctractOcto.style.float = "top";