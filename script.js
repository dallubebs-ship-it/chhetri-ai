function sendMessage() {
    const input = document.getElementById("message");
    const response = document.getElementById("response");

    const message = input.value.trim();

    if (message === "") {
        response.textContent = "Please type something first.";
        return;
    }

    response.textContent = "CHHETRI AI received: " + message;

    input.value = "";
}

function quickAsk(text) {
    const input = document.getElementById("message");

    input.value = text;
    input.focus();
}