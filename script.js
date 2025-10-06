const message = `al mintaa maaf yaa ke ecaa tadi sempet ngatain ecaa "Tahu Bodrexx", sebenarnyaa al tak sengaja mengatakann ituu, so i hope ecaa will forgive al, sebenarnyaa al tidaa setega ituu koo ngatain ecaa "Tahu Bodrexx" apalagi kasar samaa ecaa, al tak berani si soalnyaa kan al lemah lembutt, disini al jugaa tidaa sekdar minta maaf samaa ecaa al jugaa mau ngasih tauu kaloo ecaa ngga sendiriann jadii kalo ada apa apa ecaa bisaa andalinn al koo, kann al jago, so jangan ngrasa sendiri lagi yaa masih ada al disini sama temen-temen ecaa yang lainn. I hope ecaa is better than yesterday and ecaa can achieve what ecaa wants. `;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
