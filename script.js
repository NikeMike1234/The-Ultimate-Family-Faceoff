// Get the input fields and button
const teamNameInput = document.getElementById('teamNameInput');
const gameCodeInput = document.getElementById('gameCodeInput');
const startButton = document.getElementById('startButton');

// The correct game code
const correctGameCode = 'Drew6';

// Function to check if the game code is correct
function checkGameCode() {
  if (gameCodeInput.value === correctGameCode) {
    enableTeamNameInput();
  } else {
    disableTeamNameInput();
  }
}

// Function to enable the team name input and the start button
function enableTeamNameInput() {
  teamNameInput.disabled = false;
  teamNameInput.style.opacity = 1;
  checkTeamNameInput(); // Check name validity immediately
}

// Function to disable the team name input and the start button
function disableTeamNameInput() {
  teamNameInput.disabled = true;
  teamNameInput.style.opacity = 0.5;
  startButton.disabled = true;
}

// Function to check if the team name input is valid
function checkTeamNameInput() {
  const name = teamNameInput.value;
  // If team name is valid (not empty), enable the start button
  if (name.length > 0 && gameCodeInput.value === correctGameCode) {
    startButton.disabled = false;
  } else {
    startButton.disabled = true;
  }
}

// Event listeners
gameCodeInput.addEventListener('input', checkGameCode);
teamNameInput.addEventListener('input', checkTeamNameInput);

// Initial state
disableTeamNameInput(); // Disable team name input and start button initially

// Function to handle Start button click
startButton.addEventListener('click', function () {
  const teamName = teamNameInput.value;
  // Save the team name in localStorage for the next page
  localStorage.setItem('teamName', teamName);
  // Redirect to game start page
  window.location.href = 'game-start.html';
});
