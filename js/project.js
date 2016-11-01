var count = 1;
var secondCount = 1;


function minusCounter() {
	var isShowing = document.getElementById('project1');
	var leftArrow = document.getElementById('left-arrow');
	var rightArrow = document.getElementById('right-arrow');
	rightArrow.style.display = "block";
	if (isShowing.style.display === "block") {
		leftArrow.style.display = "none";
	}
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
	var isShowing = document.getElementById('project4');
	var rightArrow = document.getElementById('right-arrow');
	var leftArrow = document.getElementById('left-arrow');
	leftArrow.style.display = "block";

	if (isShowing.style.display === "block") {
		rightArrow.style.display = "none";
	}
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
	var isShowing = document.getElementById('project1-small');
	var leftArrow = document.getElementById('small-left-arrow');
	var rightArrow = document.getElementById('small-right-arrow');
	rightArrow.style.display = "block";
	if (isShowing.style.display === "block") {
		leftArrow.style.display = "none";
	}
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
	var isShowing = document.getElementById('project4-small');
	var rightArrow = document.getElementById('small-right-arrow');
	var leftArrow = document.getElementById('small-left-arrow');
	leftArrow.style.display = "block";
	if (isShowing.style.display === "block") {
		rightArrow.style.display = "none";
	}
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
	var isShowing = document.getElementById('project1-mobile');
	var leftArrow = document.getElementById('mobile-left-arrow');
	var rightArrow = document.getElementById('mobile-right-arrow');
	rightArrow.style.display = "block";
	if (isShowing.style.display === "block") {
		leftArrow.style.display = "none";
	}
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
	var isShowing = document.getElementById('project4-mobile');
	var rightArrow = document.getElementById('mobile-right-arrow');
	var leftArrow = document.getElementById('mobile-left-arrow');
	leftArrow.style.display = "block";
	if (isShowing.style.display === "block") {
		rightArrow.style.display = "none";
	}
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
