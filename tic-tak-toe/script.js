 let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgBox = document.querySelector(".msg"); 
let msg = document.querySelector(".win");
let turn0 = true; // true for O and false for X

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box clicked"); 
        // place symbol and add a class so we can style X and O differently
        if (turn0) {
            box.textContent = "O";
            box.classList.remove("x");
            box.classList.add("o");
            turn0 = false;
        } else {
            box.textContent = "X";
            box.classList.remove("o");
            box.classList.add("x");
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})




const checkWinner = () => {
    for(pattern of winPatterns) {
       let pos1 = boxes[pattern[0]].innerHTML;
       let pos2 = boxes[pattern[1]].innerHTML;
       let pos3 = boxes[pattern[2]].innerHTML;
       if( pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if(pos1 === pos2 && pos2 === pos3) {
                console.log("Winner is:", pos1);
                showWinner(pos1);
            }
       }


    }
}
 
const gameOver = () => {
    for(box of boxes) {
        box.disabled = true;
    }
}

const newGame = () => {
    for(box of boxes) {
        box.disabled = false;
    }
}

const showWinner = (winner) => { 
    msg.innerHTML = `Congratulations!! Winner is: ${winner}`;
    msgBox.classList.remove("hide");
    gameOver();
}

const reset = () => {
    turn0 = true;
    enableAllBoxes();
    clearBoxes();
    msgBox.classList.add("hide");
}

const enableAllBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
    });
}

const clearBoxes = () => {
    boxes.forEach(box => {
        // clear content and any X/O classes so colors reset
        box.textContent = "";
        box.classList.remove("x", "o");
    });
}

resetBtn.addEventListener("click", reset);
newGameBtn.addEventListener("click", reset);