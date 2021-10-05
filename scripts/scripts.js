console.log("octopus cather");

let score = 0;
let timeElapsed = 0;
// let octo = document.querySelector("#octo");
let timer = window.setInterval(moveOcto, 1000);



let octo = document.querySelector("#octo");

function moveOcto() {
    // timeElapsed = timeElapsed + 1; 
    octo.style.left = Math.random()*1000+"px";
    octo.style.top = Math.random()*500 + "px";

}



// octo.addEventListener("click", moveOcto);



