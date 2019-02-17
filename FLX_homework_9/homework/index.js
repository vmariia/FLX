const data = [
	{
		"_id": "5b5e3168c6bf40f2c1235cd6",
		"index": 0,
		"age": 39,
		"eyeColor": "green",
		"name": "Stein",
		"favoriteFruit": "apple"
	},
	{
		"_id": "5b5e3168e328c0d72e4f27d8",
		"index": 1,
		"age": 38,
		"eyeColor": "blue",
		"name": "Cortez",
		"favoriteFruit": "strawberry"
	},
	{
		"_id": "5b5e3168cc79132b631c666a",
		"index": 2,
		"age": 2,
		"eyeColor": "blue",
		"name": "Suzette",
		"favoriteFruit": "apple"
	},
	{
		"_id": "5b5e31682093adcc6cd0dde5",
		"index": 3,
		"age": 19,
		"eyeColor": "green",
		"name": "George",
		"favoriteFruit": "banana"
	}
]

function findTypes() {
	let newArray = [];
	for (let i = 0; i < arguments.length; i++) {
		newArray.push(typeof arguments[i]);
	}
	return newArray;
}
findTypes(null, 5, "hello"); 

function executeforEach(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}
executeforEach([1,2,3], el => console.log(el));

function mapArray(arr, func) {
	let newArray = [];
	executeforEach(arr, el => newArray.push(func(el)));
	return newArray;
}
mapArray([2, 5, 8], el => el + 3 );

function filterArray(arr, func) {
	let newArray = [];
	executeforEach(arr, el => {
		if (func(el)) {
			newArray.push(el);
		}
	});
	return newArray;
}
filterArray([2, 5, 8], el => el > 3 );

function getAmountOfAdultPeople(input) {
	return filterArray(input, el => el.age > 18).length;
}
getAmountOfAdultPeople(data);

function getGreenAdultBananaLovers(input) {
	let filter = filterArray(input, el => {
		if (el.age > 18 && el.favoriteFruit === "banana" && el.eyeColor === "green" ) {
			return el.name;
		}
	})
	return mapArray(filter, el => el.name );
}
getGreenAdultBananaLovers(data);

function keys(obj) {
	let objArr = [];
	let key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			objArr.push(key);
		}
	}
	return objArr;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});

function values(obj) {
	let valueArr = [];
	let key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			valueArr.push(obj[key]);
		}
	}
	return valueArr;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});

function showFormattedDate(obj) {
	return `Date: ${obj.getDate()} of ${obj.toString().substr(4, 3)}, ${obj.getFullYear()}`;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(obj) {
	let year = obj.getFullYear();
	if (year % 2 === 0) {
		return true;
	}
	return false;
}
isEvenYear(new Date('2019-01-27T01:10:00'));

function isEvenMonth(obj) {
	let month = obj.getMonth();
	if (month % 2) {
		return true;
	}
	return false;
}
isEvenMonth(new Date('2019-02-27T01:10:00'));