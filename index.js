const inputs = document.querySelectorAll("input");
const submitButton = document.querySelector("button[type='submit']");
const iconInputsContainer = document.querySelectorAll(
	"div.icon-group-container"
);

inputs.forEach((input) => {
	input.addEventListener("focus", () => {
		console.log("FOCUSIN");
		input.classList.remove("empty");
		if (input.parentElement.classList.contains("icon-group")) {
			input.parentElement.classList.remove("empty");
			input.parentElement.classList.add("filling");
		}
		input.classList.add("filling");

		checkInputsFilled();
	});

	input.addEventListener("focusout", () => {
		console.log("FOCUSOUT");
		if (!input.value) {
			input.classList.remove("filling");
			if (input.parentElement.classList.contains("icon-group")) {
				input.parentElement.classList.remove("filling");
				input.parentElement.classList.add("empty");
			}
			input.classList.add("empty");
		}
	});
});

function checkInputsFilled() {
	let inputsArray = Array.from(inputs);
	let result = inputsArray.filter((input) => input.value == "");
	if (result.length == 1) {
		console.log("OHO");
		result[0].addEventListener("input", () => {
			console.log("Escribiendo");
			if (result[0].value !== "") {
				submitButton.classList.remove("disabled");
				submitButton.removeAttribute("disabled");
			}
			if (result[0].value == "") {
				submitButton.classList.add("disabled");
				submitButton.setAttribute("disabled", "");
			}
		});
	}
}
