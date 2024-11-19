let userScore =0;
let compScore =0;

const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score")
const compScorePara= document.querySelector("#comp-score")

const gencompchoice=()=>{
    const options=["rock","paper","scissors"]
    const randIdx =Math.floor(Math.random()*3)
    return options[randIdx]
    //rock, papaer , scissors

}

const drawGame =()=>{
    // console.log("game was draw");
     msg.innerText ="game draw"
      msg.style.backgroundColor =" #000"
}
const showWinner =(userWin, userChoice,compChoice)=>{
    if(userWin){
        // console.log("you win");
        userScore++;
        userScorePara.innerText =userScore;
        msg.innerText = `you win! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor ="green"
    }

    else{
        // console.log("you lose");
        compScore++
        compScorePara.innerText =compScore;
         msg.innerText =`you lose ${compChoice} beats your ${userChoice}`
          msg.style.backgroundColor ="red"
    }
}

const playGame =(userChoice)=>{
    // console.log("user choice =",userChoice);
    //generate computer choice
    const compChoice =gencompchoice();
    console.log("comp choice=",compChoice);

    if (userChoice===compChoice){
        drawGame();

    }
    else{
        let userWin= true;
        if (userChoice==="rock"){
            userWin = compChoice==="paper" ?false :true;
        }
        else if(userChoice==="paper"){
            compChoice==="scissors"? false : true;
        }
        else{
           userWin= compChoice ==="rock" ? false: true;
        }
        showWinner(userWin ,userChoice,compChoice);


    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id")
       playGame (userChoice);
    })

})







































































































































































































































