let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red", "blue", "green"]

let started = false;
let level = 0;

h2 = document.querySelector("h2")

// keypress and game start
document.addEventListener("keypress", function () {
    if (started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
}); 

// game start  Flash button 

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 500);

}

//user press btn flash 

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 500);

}

// for levelUp msg update
function levelUp() {
    userSeq = []; 
     
    level++;
     h2.innerText = `Level ${level}`;

     // random flash button 
     let randIdx = Math.floor(Math.random() * 3);
     let randColor = btns[randIdx];
     let randbtn = document.querySelector(`.${randColor}`);

     console.log(randIdx);
     console.log(randColor);
     console.log(randbtn);

     gameSeq.push(randColor);
     console.log(gameSeq);

     gameFlash(randbtn);
}

function checkAns(idx){
    console.log("current level: " , level);
     
    if(userSeq[idx] === gameSeq[idx]){
        console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);

            console.log("LevelUp");
        }
    }
    else{
        h2.innerHTML = `Game over ! <br> Your Score was <b> ${level} </b> <br> Press any key to start new game`;
// game over and flash  color red
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor = "white"; 
        } , 200 );

        reset();
    }
}
 
function btnPress()  {
    console.log("btn was pressed")
    console.log(this); 
    let  btn = this; 
    userFlash(btn);

    userColor =btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0 ;
}