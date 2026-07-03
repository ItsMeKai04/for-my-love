function goNext(){

window.location.href="access.html";

}

function sayNo(){

const hint=document.getElementById("hint");

hint.innerHTML="🤨 Hmm... think carefully again hehe ❤️";

}

let tries = 0;

function moveYes() {

    const btn = document.getElementById("yesBtn");
    const hint = document.getElementById("hint");

    const messages = [
        "😂 Too slow...",
        "😜 Come on...",
        "🥹 Almost there...",
        "❤️ Just one more...",
        "🥰 You got me!"
    ];

    if (tries < 4) {

        let x = Math.random() * 250 - 125;
        let y = Math.random() * 150 - 75;

        btn.style.transform = `translate(${x}px, ${y}px)`;

        hint.innerHTML = messages[tries];

        tries++;

    } else {

        hint.innerHTML = messages[4];

        btn.style.transform = "translate(0,0)";

        btn.onmouseover = null;

        btn.onclick = function(){

            window.location.href="final.html";

        };

    }

}
