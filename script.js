    // declare output string into a variable
    var wins = 0;
    var losses = 0;
    var round = 1;

    const resultsContainer = document.querySelector('#results');
    const roundResults = document.createElement('p');
    const score = document.createElement('p');
    score.textContent = "Wins: 0 Losses: 0 Round: 1";

    //function returns rock paper or scissors
    // store computer input into a variable
    function randInt(max){
        return Math.floor(Math.random() * Math.floor(max));
    }
    function computerPlay(){
    //randomly choose a number from an array of rock paper or scissors
    var choices = ["rock", "paper", "scissors"]
    return choices[randInt(3)]
    }


    //plays a single round of rock paper scissors and returns
    //a  string that declares the winner
    // Compare inputs a and b
    //   if Rock, 
    //     rock beats scissors
    //     rock loses to paper
    //   if Paper, 
    //     paper beats Rock
    //     paper loses to scissors
    //   if Scissots, 
    //     scissors beats paper
    //     scissors loses to rock
    function playRound(playerSelection, computerSelection){
        if(playerSelection == computerSelection){
            //recursively ask player to play again until results are different
            roundResults.textContent = "Tie, redo.";
            
        }else{
            switch(playerSelection){
                case 'rock':
                    if (computerSelection == 'paper'){
                        losses++;
                        roundResults.textContent = "Paper beats rock, you lose.";
                    }else{
                        wins++;
                        roundResults.textContent = "Rock beats scissors, you win!";
                    }
                    break;
                case 'paper':
                    if (computerSelection == 'scissors'){
                        losses++;
                        roundResults.textContent = "Scissors beats paper, you lose.";
                    }else{
                        wins++;
                        roundResults.textContent = "Paper beats rock, you win!";
                    }
                    break;
                case 'scissors':
                    if (computerSelection == 'rock'){
                        losses++;
                        roundResults.textContent = "Rock beats scissors, you lose.";
                    }else{
                        wins++;
                        roundResults.textContent = "Scissors beats paper, you win!";
                    }
                    break;
            }
        scoreboard(5);
        }
    }
    
    
    //plays 5 rounds of rock paper scissors
    function scoreboard(maxGames){
        if(round >= maxGames){
            score.textContent = outputResult(wins, losses);
            //reset score
            wins = 0;
            losses = 0;
            round = 1;
        }else{
            round += 1;
            score.textContent = `Wins: ${String(wins)} Losses: ${String(losses)} Rounds: ${String(round)}`;

        }
    }

    //store player input into a variable
      //prompt player for input
    function askPlayer(button){
        var playerChoice = button.textContent;
        return playerChoice.toLocaleLowerCase();
    }

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', function(){
        playRound(askPlayer(button), computerPlay())}));

    // output winner
    function outputResult(wins, losses){
        var result;
            if(wins > losses){
                result = "YOU FUCKIN WIN DUDE";
            }else if(wins == losses){
                result = "lmao";
            }else{
                result = "YOU LOSE. EAT MY ASS DUDE";
            }
            return result;
        }

    resultsContainer.appendChild(roundResults);
    resultsContainer.appendChild(score);

    