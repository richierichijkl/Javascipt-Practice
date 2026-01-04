let myMove="";
let machineMove="";
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};



function movements(move){
    myMove=move;
    let rand=Math.random(1);

    if(rand<=1/3){
        machineMove="rock";
    }else if(rand<=2/3){
        machineMove="paper";
    }else{
        machineMove="scissors";
    }

    play(myMove,machineMove);
    /*alert(`Your choice : ${myMove} ; Machines : ${machineMove} ; wins:${score.wins} ; losses:${score.losses} ; ties:${score.ties}`);*/


}

let winElement=document.querySelector('.js-winStatus');
let scoreElement=document.querySelector('.js-scores');
let winIconElement=document.querySelector('.js-winIcon');
winElement.innerHTML="";
scoreElement.innerHTML="";
winIconElement.innerHTML="";

let icons={
    rock:"../Assignments/rock-emoji.png",
    paper:"../Assignments/paper-emoji.png",
    scissors:"../Assignments/scissors-emoji.png"
};

function play(myMove,machineMove){
    if((myMove=='rock' && machineMove=='scissors') || (myMove=='scissors' && machineMove=='paper') || (myMove=='paper' && machineMove=='rock')){
        score.wins++;
        winElement.innerHTML="You win";
        
        
    }else if((myMove=='rock' && machineMove=='paper') || (myMove=='scissors' && machineMove=='rock') || (myMove=='paper' && machineMove=='scissors')){
        score.losses++;
        winElement.innerHTML="You lost";

    }else{
        score.ties++;
        winElement.innerHTML="Its tie";
    }

    winIconElement.innerHTML = `
    You 
    <img src="${icons[myMove]}" class="icon">
    <img src="${icons[machineMove]}" class="icon">
    Computer
  `;
    scoreElement.innerHTML=`wins:${score.wins} ; losses:${score.losses} ; ties:${score.ties}`;
    

    localStorage.setItem('score',JSON.stringify(score));
}

function reset(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    scoreElement.innerHTML=`wins:${score.wins} ; losses:${score.losses} ; ties:${score.ties}`;
    localStorage.setItem('score',JSON.stringify(score));
}