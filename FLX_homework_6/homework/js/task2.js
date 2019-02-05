function calcPrice () {
	let userMoney = +prompt('Please enter amount of money in range 0 to 9999999', 0);
	let userDiscount = +prompt('Please enter discount in range 0 to 99', 0);
	let discountMoney, saved;

	if (isNaN(userMoney) || isNaN(userDiscount) || userMoney < 0 || 
		userMoney > 9999999 || userDiscount < 0 || userDiscount > 99) {
		return 'Invalid input data';
	} else {
		saved = userMoney * userDiscount/100; 
		discountMoney = userMoney - saved;
		return 'Price without discount: ' + userMoney + '\n' +
			'Discount ' + userDiscount + '%' + '\n' +
			'Price with discount ' + Math.round(discountMoney*100)/100 + '\n' + 
			'Saved ' + Math.round(saved*100)/100;
	}
}

alert(calcPrice());