//* Submit Button Identify
let submit = document.getElementById("btn");
//* Result Paragraph Identify
let result = document.getElementById("result");
//*  Random Result Paragraph Identify
let rand = document.getElementById("rand");
//* Refress Button Identify
let reset = document.getElementById("btn1");

//*Guessing Function Start
submit.addEventListener("click", game);
function game(e) {
	//* User Input Text
	let inputText = document.getElementById("inputtext").value;
	//* Random Number Formula
	let guessNumber = Math.floor(Math.random() * 5) + 1;

	if (inputText) {
		let random = (rand.innerHTML = `The Random Number Is : ${guessNumber}`);

		if (inputText == guessNumber) {
			result.innerHTML = "Congrats! The Number Is Macthed";
			random;
		} else if (inputText > guessNumber) {
			result.innerHTML = "Opps! The Number Is Large";
			random;
		} else {
			result.innerHTML = "Opps! The Number Is Small";
			random;
		}
	} else {
		result.innerHTML = "Please Enter 1-5 Any Number";
	}

	reset.style.display = "block";
}
//*Guessing Function End

//*Refress Page Function
reset.addEventListener("click", function () {
	window.location.reload();
});
