async function send() {

    const msgBox = document.getElementById("message");
    const chatBox = document.getElementById("chat");

    const msg = msgBox.value;

    if (!msg) return;

    chatBox.innerHTML += `<div><b>You:</b> ${msg}</div>`;

    msgBox.value = "";

    const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: msg
        })
    });

    const data = await res.json();

    console.log("DATA:", data);

    chatBox.innerHTML += `<div><b>Bot:</b> ${data.response}</div>`;
}