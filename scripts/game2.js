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
    alert(`Your choice : ${myMove} ; Machines : ${machineMove} ; wins:${score.wins} ; losses:${score.losses} ; ties:${score.ties}`);
}

function play(myMove,machineMove){
    if((myMove=='rock' && machineMove=='scissors') || (myMove=='scissors' && machineMove=='paper') || (myMove=='paper' && machineMove=='rock')){
        score.wins++;
    }else if((myMove=='rock' && machineMove=='paper') || (myMove=='scissors' && machineMove=='rock') || (myMove=='paper' && machineMove=='scissors')){
        score.losses++;
    }else{
        score.ties++;
    }

    localStorage.setItem('score',JSON.stringify(score));
}

function reset(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.setItem('score',JSON.stringify(score));
}