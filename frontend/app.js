async function send(){

const msg = document.getElementById("message").value;

const res = await fetch("http://localhost:8000/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({message:msg})
});

const data = await res.json();

const chat = document.getElementById("chat");

chat.innerHTML += "<p><b>You:</b> "+msg+"</p>";
chat.innerHTML += "<p><b>Bot:</b> "+data.reply+"</p>";

}
