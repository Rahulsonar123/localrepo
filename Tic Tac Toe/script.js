let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO =true;

const winpatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",() => {
console.log("box was clicked");
box.style.color = "blue";
if (turnO) {
    box.innerText = "O";
    turnO = false;
}
else {
    box.innerText ="X";
    turnO = true;
    //   enableBoxes();
}
  box.disabled= true;
   checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
     disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winpatterns) {
           let post1val = boxes[pattern[0]].innerText;
           let post2val = boxes[pattern[1]].innerText;
           let post3val = boxes[pattern[2]].innerText;

           if(post1val != "" && post2val != "" && post3val != ""){
            if(post1val === post2val && post2val === post3val) {
                console.log("winner", post1val);
                showWinner(post1val);
            }
           }
    }

};
newGameBtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click", resetGame)