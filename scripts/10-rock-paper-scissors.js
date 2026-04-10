// Global variables
    let score = {
      wins: 0,
      losses: 0,
      ties: 0
    };

    const imgUrl = 'https://supersimple.dev/projects/rock-paper-scissors/images';
    const imgScissors = document.getElementById('img-scissors');
    imgScissors.src = `${imgUrl}/scissors-emoji.png`;

    const imgRock = document.getElementById('img-rock');
    imgRock.src = `${imgUrl}/rock-emoji.png`;

    const imgPaper = document.getElementById('img-paper');
    imgPaper.src = `${imgUrl}/paper-emoji.png`;

    const getScoreString = localStorage.getItem('score');
    score = JSON.parse(getScoreString);
    getScoreNull();

    const viewScore = document.querySelector('.js-score');
    updateScoreElement();

    // Main Processing
    function playGame(playerMove) {
      const computerMove = pickComputerMove();
      const result = getResult(playerMove, computerMove);
      displayResult(result, playerMove, computerMove);
    }

    // Functions to follow processing
    function displayResult(result, playerMove, computerMove) {
      getScoreNull();

      if (result === 'You win.') {
        score.wins++;
      } else if (result === 'You lose.') {
        score.losses++;
      } else if (result === 'Tie.') {
        score.ties++;
      }

      document.querySelector('.js-result')
        .innerHTML = result;

      // document.querySelector('.js-moves')
      //   .innerHTML = `You ${playerMove} - ${computerMove} Computer`;

      const scoreElement = document.querySelector('.js-moves');
      scoreElement.innerHTML = `<p>
        You
        <img class="move-icon" src="${imgUrl}/${playerMove}-emoji.png">
        <img class="move-icon" src="${imgUrl}/${computerMove}-emoji.png">
        Computer    
      </p>`

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();
    }

    function updateScoreElement() {
      viewScore
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function getResult(playerMove, computerMove) {
      let result = '';

      if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You lose.';
        } else if (computerMove === 'paper') {
          result = 'You win.';
        } else if (computerMove === 'scissors') {
          result = 'Tie.';
        }

      } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie.';
        } else if (computerMove === 'paper') {
          result = 'You lose.';
        } else if (computerMove === 'scissors') {
          result = 'You win.';
        }

      } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win.';
        } else if (computerMove === 'paper') {
          result = 'Tie.';
        } else if (computerMove === 'scissors') {
          result = 'You lose.';
        }
      }

      return result;
    }

    function pickComputerMove() {
      const randomNumber = Math.random();
      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }

      return computerMove;
    }

    function getScoreNull() {
      if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }
    }