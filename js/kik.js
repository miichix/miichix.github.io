var move = 0;
var buttons = [
document.getElementById('b00'), document.getElementById('b01'), document.getElementById('b02'), 
document.getElementById('b10'), document.getElementById('b11'), document.getElementById('b12'), 
document.getElementById('b20'), document.getElementById('b21'), document.getElementById('b22')]

var fixedButton = null;
var isWon = false;
var whoWON = "";

function play(objButton) {
	
	
	
	if(move%2==0) {
		objButton.innerText = "X";
		objButton.disabled = true;
		move++;
		winCheck();
		if(document.getElementById('czyKomputer').checked && move!=9 && !isWon){
			var rand = getRandomInt(8);

			var randomPicked = false;
			while(!randomPicked) {
				var pickedButton = buttons[rand];
				if(pickedButton.innerText == "") {
					randomPicked=true;
					pickedButton.innerText="O";
					pickedButton.disabled = true;
				}
				else {
					rand = getRandomInt(8);
				}
			}
			
			move++;
			winCheck();
		}
	}
	else {

		objButton.innerText = "O";
		objButton.disabled = true;
		move++;
		winCheck();

	}
	

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function reset() {
	for(var i=0;i<buttons.length;i++){
		var currentButton = buttons[i];
		
		currentButton.innerText="";
		currentButton.disabled = false;
		currentButton.style.backgroundColor = "#4CAF50";
	}
	move=0;
	isWon = false;
	czyKomputer.checked = false;
}



function threeCheck(b1, b2, b3) {
	if(b1.innerText!="") {
		if((b1.innerText==b2.innerText)&&(b2.innerText==b3.innerText)) {
			b1.style.backgroundColor = "red";
			b2.style.backgroundColor = "red";
			b3.style.backgroundColor = "red";
			whoWON = b1.innerText;
			


			return true;
		}
	}
	return false;
}

function winCheck() {
	if(move >= 5) {
		if(
		threeCheck(buttons[0],buttons[1],buttons[2])||threeCheck(buttons[3],buttons[4],buttons[5])||threeCheck(buttons[6],buttons[7],buttons[8])||
		threeCheck(buttons[0],buttons[3],buttons[6])||threeCheck(buttons[1],buttons[4],buttons[7])||threeCheck(buttons[2],buttons[5],buttons[8])||
		threeCheck(buttons[0],buttons[4],buttons[8])||threeCheck(buttons[2],buttons[4],buttons[6])
		) {
			isWon = true;
		 

			alert(whoWON + " won!!");
			blockAll();
		}
	}
}

function blockAll() {
	for(var i=0;i<buttons.length;i++) {
		buttons[i].disabled = true;
	}
}
	