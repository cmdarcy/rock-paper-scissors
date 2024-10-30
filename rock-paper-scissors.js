const getUserChoice = (userInput) => {
	userInput = userInput.toLowerCase().trim();
	if (
		userInput === "rock" ||
		userInput === "paper" ||
		userInput === "scissors" ||
		userInput === "bomb"
	) {
		return userInput;
	} else {
		console.log("Error");
	}
};

const getComputerChoice = () => {
	const randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber === 0) {
		return "rock";
	} else if (randomNumber === 1) {
		return "paper";
	}
	return "scissors";
};

const determineWinner = (userChoice, computerChoice) => {
	const possibleResults = {
		playerWin: "You won!",
		computerWin: "The computer won!",
		tied: "You tied!",
	};
	if (userChoice === computerChoice) {
		return possibleResults.tied;
	}
	if (userChoice === "bomb") {
		return possibleResults.playerWin;
	}
	if (userChoice === "rock") {
		if (computerChoice === "scissors") {
			return possibleResults.playerWin;
		}
		return possibleResults.computerWin;
	}
	if (userChoice === "paper") {
		if (computerChoice === "rock") {
			return possibleResults.playerWin;
		}
		return possibleResults.computerWin;
	}

	if (computerChoice === "paper") {
		return possibleResults.playerWin;
	}
	return possibleResults.computerWin;
};

const playGame = () => {
	const userChoice = getUserChoice("scissors");
	const computerChoice = getComputerChoice();
	console.log("User Choice", userChoice);
	console.log("Computer Choice", computerChoice);
	const result = determineWinner(userChoice, computerChoice);
	console.log(result);
};

playGame();
