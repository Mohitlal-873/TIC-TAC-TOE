let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#rst");
let newGameBtn=document.querySelector("#new");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let clickMusic=()=>
  {
   clickAudio.play(); 
 };

boxes.forEach((box) =>
{
box.addEventListener("click",clickMusic);

box.addEventListener("click",()=>
{
  console.log( "box was clicked");
  if(turn0)
  {
    box.innerText="O";
    turn0=false;
  }
  else{
    box.innerText="X";
    turn0=true;
  }
  box.disabled=true;
  checkWinner ();
});
});

const disableBoxes=()=>
{
  for(let box of boxes)
  {
    box.disabled=true;
    }
};

const enableBoxes=()=>
  {
    for(let box of boxes)
    {
      box.disabled=false;
      box.innerText="";
      }
    
  };

  const resetGame=()=>
  {
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
  }

const showWinner=(Winner)=>
{
  msg.innerText=`${Winner}-WON !!`; 
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const checkWinner = ( )=>{
    for(let pattern of winPatterns)
    {
       
      let check1 = boxes[pattern[0]].innerText;
      let check2= boxes[pattern[1]].innerText;
      let check3 = boxes[pattern[2]].innerText;

      if( check1 != "" && check2 !="" && check3 !="")
      {
         if(check1===check2 && check2===check3)
         {
            console.log(`Winner`,check1);
            showWinner(check1);
         }
         
        
      }
    }
  };
  newGameBtn.addEventListener("click",resetGame);
  rstbtn.addEventListener("click",resetGame);

  //audio
  let newGameAudio =new Audio("audio.mp3/mixkit-game-level-completed-2059.wav");
  let rstGameAudio =new Audio("audio.mp3/mixkit-unlock-game-notification-253.wav");
  let clickAudio = new Audio("audio.mp3/mixkit-select-click-1109.wav");

  let newMusic=()=>{
     newGameAudio.play();
  };
  newGameBtn.addEventListener("click",newMusic);

  let rstMusic=()=>
  {
    rstGameAudio.play();
  };
  rstbtn.addEventListener("click",rstMusic);

  



    