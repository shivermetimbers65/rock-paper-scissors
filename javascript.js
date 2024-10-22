function getComputerChoice(paper, rock, scissors){
    const random = Math.random();
    if (random < 0.33){
        return paper;
    } else if (random < 0.66) {
        return rock;
    } else {
        return scissors;
    }
}

const sheesh = getComputerChoice("Paper", "Rock", "Scissors");

console.log(sheesh)