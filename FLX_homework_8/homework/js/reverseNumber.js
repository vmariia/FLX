function reverseNumber(number) {
    let i, reverse = 0;
    let n = Math.abs(number);
	while(n > 0) {
		i = n % 10;
    reverse = reverse * 10 + i;
		n = Math.floor(n / 10);
	}
	return reverse * Math.sign(number);
}
reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000); 