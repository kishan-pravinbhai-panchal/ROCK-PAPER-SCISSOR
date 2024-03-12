let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
      const options = ["rock" , "paper" , "scissors"]
      const randIdX = Math.floor(Math.random()*3);
      return options[randIdX];
}

const drawGame = () => {
    msg.innerText = "The Game Was Draw, Play again."
    msg.style.backgroundColor = "#003566";

}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    }else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `oops! you lost. ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    console.log ("userchoice =" , userChoice);
    const compChoice = genCompChoice();
    console.log ("compchoice =" , compChoice);


    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true ;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        }else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin , userChoice , compChoice)

    }
}



choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
});