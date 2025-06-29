var usedNums = new Array(76);

var options = [
    "Yellow",
    "Thank you slide",
    "Font change",
    "Cut off text",
    "Screenshot pasted",
    "Skipping slides",
    "Not English",
    "I can taste the pixels",
    "Reading labels is optional",
    "Gradient background",
    "Full sentences",
    "Slide = my script",
    "TLA",
    "Tipo",
    "Wrong button",
    "Unnecessary Animation",
    "Device compatibility",
    "Overfull plot",
    "Colour = Fun",
    "Contrast is optional",
    "Time slots are guidelines",
    "Text everywhere",
    "Talking to the slide",
    "Stop word overload",
    "Comic Sans",
    "Speaking softly",
    "Equations",
    "Citations are optional",
    "4:3 is still relevant",
    "'Ofcourse I know what slide comes next'",
    "Notification!",
    "Unnecessary axes",
    "monotone =_="
]

function newCard() {
	for (var i=0; i<24; i++) {
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	var currSquare = "square" + thisSquare;
	var newNum;

	do {
		newNum = getNewNum();
	}
	while (usedNums[newNum]);
    usedNums[newNum] = true;
    document.getElementById(currSquare).innerHTML = options[newNum];
    document.getElementById(currSquare).className = "";
    document.getElementById(currSquare).onmousedown = toggleColor;
}


function getNewNum() {
	return Math.floor(Math.random() * options.length);
}


function anotherCard() {
	for (var i=1; i<usedNums.length; i++) {
		usedNums[i] = false;
	}
	newCard();
	return false;
}


function toggleColor(evt) {
	if (evt) {
		var thisSquare = evt.target;
	}	else {
		var thisSquare = window.event.srcElement;
	}
	if (thisSquare.className == "") {
		thisSquare.className = "pickedBG";
	}	else {
		thisSquare.className = "";
	}
	checkWin();
}


function checkWin() {
	var winningOption = -1;
	var setSquares = 0;
	var winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928);

	for (var i=0; i<24; i++) {
		var currSquare = "square" + i;
		if (document.getElementById(currSquare).className != "") {
			document.getElementById(currSquare).className = "pickedBG";
			setSquares = setSquares | Math.pow(2,i);
		}
	}

	for (var i=0; i<winners.length; i++) {
		if ((winners[i] & setSquares) == winners[i]) {
			winningOption = i;
		}
	}
	
	if (winningOption > -1) {
		for (var i=0; i<24; i++) {
			if (winners[winningOption] & Math.pow(2,i)) {
				currSquare = "square" + i;
				document.getElementById(currSquare).className = "winningBG";
			}
		}
	}
};