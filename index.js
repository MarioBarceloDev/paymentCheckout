const input = document.querySelectorAll("input");

input.forEach((input) => {
	input.addEventListener("focus", () => {
		console.log("FOCUSIN");
		input.classList.remove("empty");
		if (input.parentElement.classList.contains("icon-group")) {
			input.parentElement.classList.remove("empty");
			input.parentElement.classList.add("filling");
		}
		input.classList.add("filling");
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
