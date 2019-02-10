let userLogin = prompt("Please, enter your login ", "");
let userPassword, currentTime = new Date().getHours();

if (userLogin === "" || userLogin === null) {
	alert("Canceled.")
} else if (userLogin.length < 4) {
	alert("I don't know any users having name length less than 4 symbols")
} else if (userLogin === "User" || userLogin === "Admin") {
	userPassword = prompt("Please, enter your password", "")
	if (userPassword === "" || userPassword === null) {
		alert("Canceled.");
	} else if ((userLogin === "User" && userPassword === "UserPass") || 
		(userLogin === "Admin" && userPassword === "RootPass")) {
		if (currentTime < 20) {
			alert("Good day, dear " + userLogin + "!");
		} else {
			alert("Good evening, dear " + userLogin + "!");
		}
	} else {
		alert("Wrong password");
	}
} else {
	alert("I don’t know you");
}