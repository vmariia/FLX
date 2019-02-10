let confirmMessage = confirm("Do you want to play a game?");
let randomNumber, userNumber, prize;
let maxNumber = 5;
let firstPrize = 10;
let userAttempts = 3;
let totalPrize = 0;
let continueGame;
if (!confirmMessage) {
	alert("You did not become a millionaire, but can.");
} else {
	while (confirmMessage) {
		randomNumber = Math.floor(Math.random() * (maxNumber + 1));
		for (let i = 0; i < userAttempts; i++) {
			switch (i) {
        case 0:
          prize = firstPrize;
          break;
        case 1:
          prize = Math.floor(firstPrize / 2);
          break;
        case 2:
          prize = Math.floor(firstPrize / 4);
          break;
        default:
          prize = 0;
          break;
      }
				userNumber = parseInt(prompt("Enter a number from 0 to" + maxNumber + "\n" +
        "Attempts left " + (userAttempts - i) + "\n" +
        "Total prize " + totalPrize + "$" + "\n" +
        "Possible prize on current attempt " + prize + "$"));
      if (!isNaN(userNumber) && randomNumber === userNumber) {
        totalPrize += prize;
        continueGame = confirm("Congratulation! Your prize is: " + totalPrize + "$ Do you want to continue a game?");
        break;
      }
		}
		if (continueGame) {
      maxNumber *= 2;
      firstPrize *= 3;            
      continueGame = false;
    } else {
      alert("Thank you for a game. Your prize is: " + totalPrize + "$");
      continueGame = confirm("Do you want to play again?");
      if (continueGame) {
        maxNumber *= 2;
        firstPrize *= 3;            
        continueGame = false;
      } else { 
				break; 
      }
    }
	}
}