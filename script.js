//your JS code here. If required.
const codes = document.querySelectorAll(".code");

// Focus first input on page load
codes[0].focus();

codes.forEach((code, index) => {

    // Move to next input after entering a digit
    code.addEventListener("input", () => {
        code.value = code.value.replace(/[^0-9]/g, "");

        if (code.value && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    // Handle Backspace
    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {

            if (code.value === "" && index > 0) {
                codes[index - 1].value = "";
                codes[index - 1].focus();
                e.preventDefault();
            }
        }
    });

});