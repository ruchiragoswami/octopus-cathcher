console.log("octopus cather");

let octo = document.querySelector("#octo");
let timer = window.setInterval(moveOcto, 1000);
let secondsGone = document.querySelector("#secondsGone");
let endMessage = document.querySelector("#endMessage");
let scoreText = document.querySelector("#scoreText"); 
let disctractOcto = document.querySelector("#distract");
let octoLast = document.querySelector("#last"); 



let score = 0;
let timeElapsed = 0;
disctractOcto.style.visibility='hidden'; 

octoLast.style.visibility   = "hidden"; 


scoreText.innerText = "0";
secondsGone.innerText = "0"; 

function caughtOcto() {    
    score = score + 1 ;
    scoreText.innerText =  score; 
    console.log(score); 
}



function moveOcto() {
    timeElapsed = timeElapsed + 1; 
    octo.style.left = Math.ceil(Math.random()*900)+"px";
    octo.style.top = Math.ceil(Math.random()*500) + "px";
    secondsGone.innerText = timeElapsed;

    if (timeElapsed >15 && timeElapsed <18 ) {
        disctractOcto.style.visibility = "visible";   
         
    } else if (timeElapsed == 30){
        clearInterval(timer); 
        octo.style.visibility= "hidden" ;
        endMessage.innerText = "Time Up! You Socred: " + score; 
        disctractOcto.style.visibility = "visible";
        // disctractOcto.style.float = "center";
        octoLast.style.visibility = "visible"; 
        octoLast.style.left = 750+"px";
        octoLast.style.top = 400+"px"; 
        disctractOcto.style.marginRight = "550px"; 



        
        
        // break;

    }   
    else {
        disctractOcto.style.visibility = "hidden";
    }

    
}

octo.addEventListener("mousedown", caughtOcto);


