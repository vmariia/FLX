function userCard(number) {
	let cardOperation = [];
	let cartObject = {
		balance: 100,
		transactionLimit: 100,
		historyLogs: cardOperation,
		key: number
	}

	const userMethods = {
		getCardOptions: function() {
			return cartObject;
		},
		putCredits: function(credits) {
			cartObject.balance += credits;
			cardOperation.push({operationType: 'Received credits', credits: credits,
				operationTime: new Date().toLocaleString('en-GB')
			});
		},
		takeCredits: function(creditsAmount) {
			if (creditsAmount <= cartObject.transactionLimit && creditsAmount <= cartObject.balance ) {
				cartObject.balance -= creditsAmount;
			} else {
				console.error('Credits ' + creditsAmount + ' is greater than transaction limit ' 
					+ cartObject.transactionLimit + ' and remaining balance ' + cartObject.balance);
			}
			cardOperation.push({operationType: 'Withdrawal of credits', credits: creditsAmount,
				operationTime: new Date().toLocaleString('en-GB')
			});
		},
		setTransactionLimit: function(transactionLimit) {
			cartObject.transactionLimit = transactionLimit;
			cardOperation.push({operationType: 'Transaction limit change', credits: transactionLimit,
				operationTime: new Date().toLocaleString('en-GB')
			});
		},
		transferCredits: function(credits, recipientCard) {
			const tax = 0.005;
			const transferCredit = tax * credits + credits;
			if (transferCredit <= cartObject.transactionLimit && transferCredit <= cartObject.balance) {
				this.takeCredits(transferCredit);
				recipientCard.putCredits(credits);
			} else {
				console.error('Credits ' + transferCredit + ' is greater than transaction limit ' 
					+ cartObject.transactionLimit + ' and remaining balance ' + cartObject.balance);				
			}
		}
	}
	return userMethods;
}

class UserAccount {
	constructor(name) {
		this.name = name;
		this.cards = [];
		this.maxNumber = 3;
	}
	addCard() {
		if (this.cards.length < this.maxNumber) {
			return this.cards.push(userCard(this.cards.length + 1));
		} else {
			console.error('You can create only 3 cards to your account')
		}
	}
	getCardByKey(key) {
		return this.cards[key-1];
	}
}


// let user = new UserAccount('Bob');
// user.addCard()
// user.addCard()

// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);

// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300, card2);

// card2.takeCredits(50);

// console.log(card1.getCardOptions());

// console.log(card2.getCardOptions()); 