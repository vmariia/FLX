function calcQuadraticEquation() {
	let a = +prompt('First number', 0);
	let b = +prompt('Second number', 0);
	let c = +prompt('Third number', 0);
	let d, x1, x2, x;

	if ( isNaN(a) || isNaN(b) || isNaN(c) || a === 0 || a==='' || b==='' || c==='') {
		return 'Invalid input data';
	} else {
		d = Math.pow(b,2) - 4*a*c;
		if (d > 0) {
			x1 = ( -b + Math.sqrt(d) ) / (2 * a);
			x2 = ( -b - Math.sqrt(d) ) / (2 * a);
			return 'x1 = ' + x1 + ' and ' + 'x2 = ' + x2;
		} else if ( d === 0 ) {
			x = -b / (2 * a);
			return 'd = ' + d + '; x = ' + x;
		} else {
			return 'no solution (when Discriminant < 0)';
		}
	}
}

alert(calcQuadraticEquation());