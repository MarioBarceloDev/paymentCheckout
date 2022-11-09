const input = document.querySelectorAll("input");

input.forEach((input) => {
	input.addEventListener("focus", () => {
		console.log("FOCUSIN");
		input.classList.remove("empty");
		input.classList.add("filling");
	});

	input.addEventListener("focusout", () => {
		console.log("FOCUSOUT");
		if (!input.value) {
			input.classList.remove("filling");
			input.classList.add("empty");
		}
	});
});
