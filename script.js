let yourscore=0;
let compscore=0;
let gameEnded=false;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
let msgcontainer=document.querySelector(".msg-container");
let your_score=document.querySelector("#your-score");
let comp_score=document.querySelector("#comp-score");
let winner=document.querySelector(".winner");
let newgame=document.querySelector(".newgame");


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        //To check whether the game is over
        if(gameEnded) return;

        //To get id
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});

let playgame=(userChoice)=>{
    console.log("User Choice: ",userChoice);

    //Generate computer choice
    let compchoice=genCompChoice();

    console.log("Computer choice: ",compchoice);

    if((userChoice==='rock' && compchoice==='scissor')||(userChoice==='paper' && compchoice==='rock')||(userChoice==='scissor' && compchoice==='paper')){
        msg.textContent='You beat Computer';
        msg.style.backgroundColor="green";
        yourscore++;
        your_score.textContent=yourscore;
    }
    else if((userChoice==='scissor' && compchoice==='rock')||(userChoice==='rock' && compchoice==='paper')||(userChoice==='paper' && compchoice==='scissor')){
        msg.textContent='Computer beats You';
        msg.style.backgroundColor="red";
        compscore++;
        comp_score.textContent=compscore;
    }
    else{
        msg.textContent='It is a Tie';
        msg.style.backgroundColor="black";
    }

    if(yourscore==5 || compscore==5){
        gameEnded=true;
        winner.classList.remove("gayab");
        if(yourscore>compscore){
            winner.textContent="You won👌";
        }
        else{
            winner.textContent="Computer won";
        }
    }



};

let genCompChoice=()=>{
    const options=['rock','paper','scissor'];
    let compChoice=Math.floor(Math.random()*3); //3 to get 0,1,2
    return options[compChoice];
};

newgame.addEventListener("click",()=>{
    gameEnded=false;

    yourscore=0,compscore=0;
    your_score.textContent=0;
    comp_score.textContent=0;
    msg.textContent="Play your Move";
    msg.style.backgroundColor="black";
    winner.classList.add("gayab");

})