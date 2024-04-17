let userChoice = 0;
let compChoice = 0;
const choices = document.querySelectorAll(".choice");
const genCompChoice=() =>{
  const options = ["rock","paper","scissors"];
  const ranIdx = Math.floor(Math.random()*3);
  return options[ranIdx];
}
const playGame = (userChoice)=>{
    console.log("user choice",userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice",compChoice);
    
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})