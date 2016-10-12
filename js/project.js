var project0 = "project0";
var project1 = "project1";
var project2 = "project2";
var project3 = "project3";
var project4 = "project4";
var project5 = "project5";

count = 1;
secondCount = 1;


function minusCounter() {
	if (count == 0) {
		return "project0";
	}
	else {
		count = count-1;
		var projectNum = "project" + count.toString();
		console.log(count);
		return projectNum;
	};
};

function addCounter (){
	if (count == 5) {
		return "project5"
	}
	else { 
		count = count + 1;
		var projectNum = "project" + count.toString();
		console.log(count);
		return projectNum;
	};	
};

function secondAddCounter() {
	if (secondCount == 5) {
		return "project5-details"
	}
	else { 
		secondCount = secondCount + 1;
		var projectNum = "project" + secondCount.toString() + "-details";
		console.log(secondCount);
		return projectNum;
	};	
}

function secondMinusCounter() {
	if (secondCount == 0) {
		return "project0-details";
	}
	else {
		secondCount = secondCount - 1;
		var projectNum = "project" + secondCount.toString() + "-details";
		return projectNum;
	};
}

function setCount(set) {
	count = set;
	console.log("count = " + count);
	return count;
};


function minusCounterSmall() {
	if (count == 0) {
		return "project0-small";
	}
	else {
		count = count-1;
		var projectNum = "project" + count.toString()+'-small';
		console.log(count);
		return projectNum;
	};
};

function addCounterSmall (){
	if (count == 5) {
		return "project5-small"
	}
	else { 
		count = count + 1;
		var projectNum = "project" + count.toString()+'-small';
		console.log(count);
		return projectNum;
	};	
};


function secondAddCounterSmall() {
	if (secondCount == 5) {
		return "project5-details-small"
	}
	else { 
		secondCount = secondCount + 1;
		var projectNum = "project" + secondCount.toString() + "-details-small";
		console.log(secondCount);
		return projectNum;
	};	
}

function secondMinusCounterSmall() {
	if (secondCount == 0) {
		return "project0-details-small";
	}
	else {
		secondCount = secondCount - 1;
		var projectNum = "project" + secondCount.toString() + "-details-small";
		return projectNum;
	};
}


function minusCounterMobile() {
	if (count == 0) {
		return "project0-mobile";
	}
	else {
		count = count-1;
		var projectNum = "project" + count.toString()+'-mobile';
		console.log(count);
		return projectNum;
	};
};

function addCounterMobile (){
	if (count == 5) {
		return "project5-mobile"
	}
	else { 
		count = count + 1;
		var projectNum = "project" + count.toString()+'-mobile';
		console.log(count);
		return projectNum;
	};	
};

function secondAddCounterMobile() {
	if (secondCount == 5) {
		return "project5-details-mobile"
	}
	else { 
		secondCount = secondCount + 1;
		var projectNum = "project" + secondCount.toString() + "-details-mobile";
		console.log(secondCount);
		return projectNum;
	};	
}

function secondMinusCounterMobile() {
	if (secondCount == 0) {
		return "project0-details-mobile";
	}
	else {
		secondCount = secondCount - 1;
		var projectNum = "project" + secondCount.toString() + "-details-mobile";
		return projectNum;
	};
}