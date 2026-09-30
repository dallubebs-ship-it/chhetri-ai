const AI_URL = "https://chhetri-ai.chhetrixsulav.workers.dev";

async function sendMessage() {
    const input = document.getElementById("message");
    const response = document.getElementById("response");

    const message = input.value.trim();

    if (message === "") {
        response.textContent = "Please type something first.";
        return;
    }

    response.textContent = "CHHETRI AI is thinking...";

    try {
        const res = await fetch(AI_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message
            })
        });

        const data = await res.json();

        if (!res.ok) {
            response.textContent =
                "Sorry, something went wrong.";
            console.error(data);
            return;
        }

        response.textContent =
            data.reply || "Sorry, I could not generate a response.";

    } catch (error) {
        console.error(error);
        response.textContent =
            "CHHETRI AI is currently unavailable.";
    }

    input.value = "";
}

function quickAsk(text) {
    const input = document.getElementById("message");

    input.value = text;
    input.focus();
}
