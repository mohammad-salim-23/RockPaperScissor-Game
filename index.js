let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usePara = document.querySelector("#user-score");
const compPara = document.querySelector("#comp-score");
const genCompChoice=() =>{
  const options = ["rock","paper","scissors"];
  const ranIdx = Math.floor(Math.random()*3);
  return options[ranIdx];
}
const drawGame=()=>{
    console.log("Game is draw");
    msg.innerText="Game was draw . Play again";
    msg.style.backgroundColor = "#081b31";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
       
        userScore++;
        usePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
       compScore++;
       compPara.innerText = compScore;
        msg.innerText = `You lost . ${compChoice} beats youe ${userChoice} `
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice)=>{
    console.log("user choice",userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice",compChoice);
    if(userChoice===compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice ==="rock"){
            // paper , scissors
            userWin = compChoice === "paper"?false:true;
        }
        else if(userChoice ==="paper"){
            // rock,scissors
            userWin = compChoice === "scissors"?false:true;
        }else{
            //paper,rock
            userWin = compChoice === "rock"?false:true;
        }
       showWinner(userWin, userChoice,compChoice); 
      
    }
    

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})