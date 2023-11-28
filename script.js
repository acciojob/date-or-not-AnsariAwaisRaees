var isDate = function (input) {
	//   write your code here
	if (Object.prototype.toString.call(input) === '[object Date]') {
		return !isNaN(input.getTime());
	}

	if(typeof input === 'string'){
		const parsedDate = new Date(input);
		return !isNaN(parsedDate.getTime());
	}

	return false;
}; 

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
