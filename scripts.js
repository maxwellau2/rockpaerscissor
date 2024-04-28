function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const player_move_status = document.getElementById("player_move");
const computer_move_status = document.getElementById("computer_move");

function rock_human(){
    let move = 0;
    player_move_status.innerHTML = "ROCK"
    result = decide(move);
    return 0;
}

function paper_human(){
    let move = 1;
    player_move_status.innerHTML = "PAPER"
    result = decide(move);
    return 1;
}

function scissor_human(){
    let move = 2;
    player_move_status.innerHTML = "SCISSOR"
    result = decide(move);
    return 2;
}

function get_computer_move(){
    let computer_move = getRandomInt(3);
    switch(computer_move) {
        case 0:// rock
            computer_move_status.innerHTML = "ROCK";
            break;
        case 1: //paper
            computer_move_status.innerHTML = "PAPER";
            break;
        default: // scissor
            computer_move_status.innerHTML = "SCISSOR";
            break;
      }
    return computer_move;
}

const player_score = document.getElementById("player_score");
const computer_score = document.getElementById("computer_score");

const player_bg = document.getElementById("player");
const computer_bg = document.getElementById("computer");

function decide(player_move){
    let computer_move = get_computer_move();
    console.log(`computer move ${computer_move}`);
    // w.r.t player, rock(0) beats scissor(2),paper(1) beats rock(0), scissor(2) beats paper(1)
    let win = [];
    win.push(2,0,1);
    if (computer_move === win[player_move]){
        current_score = parseInt(player_score.textContent);
        current_score += 1;
        console.log(current_score);
        player_score.innerHTML = String(current_score);
        player_bg.style.backgroundColor = "#77c78a";
        computer_bg.style.backgroundColor = "blanchedalmond";
    }
    else if (player_move === win[computer_move]){
        current_score = parseInt(computer_score.textContent);
        current_score += 1;
        console.log(current_score);
        computer_score.innerHTML = String(current_score);
        computer_bg.style.backgroundColor = "#77c78a";
        player_bg.style.backgroundColor = "blanchedalmond";
    }
    else{
        player_bg.style.backgroundColor = "blanchedalmond";
        computer_bg.style.backgroundColor = "blanchedalmond";
    }
}

function reset_score(){
    computer_score.innerHTML = 0;
    player_score.innerHTML = 0;
    player_bg.style.backgroundColor = "blanchedalmond";
    computer_bg.style.backgroundColor = "blanchedalmond";
    return;
}

const rock = document.getElementById("player_rock");
const paper = document.getElementById("player_paper");
const scissor = document.getElementById("player_scissor");
const reset_button = document.getElementById("reset_button");

rock.addEventListener("click", rock_human);
paper.addEventListener("click", paper_human);
scissor.addEventListener("click", scissor_human);
reset_button.addEventListener("click", reset_score);