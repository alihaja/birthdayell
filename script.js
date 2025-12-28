function celebrate() {
    document.body.classList.add("dark");

    const messageBox = document.querySelector(".message-box");
    messageBox.innerHTML = `<h1>🎉 Happy Birthday, Jen! 🎉</h1>`;

  for (let i = 0; i < 7; i++) {
    setTimeout(createFirework, i * 250);
}


    setTimeout(() => {
        document.body.classList.remove("dark");
        messageBox.innerHTML = `
            <h1>Selamat Ulang Tahun, Jen!</h1>
            <p>Semoga hari-harimu selalu penuh kebahagiaan 🤍</p>
            <button class="celebrate-btn" onclick="celebrate()">🎉 Rayakan! 🎉</button>
        `;
    }, 3500);
}

function createFirework() {
    const container = document.getElementById("fireworks-container");

    const centerX = Math.random() * window.innerWidth;
    const centerY = Math.random() * window.innerHeight * 0.6;

    const colors = [
        "#00f5ff",
        "#ff2fd3",
        "#7cff00",
        "#ffd700",
        "#9b5cff"
    ];

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement("div");
        p.className = "firework";

        const color = colors[Math.floor(Math.random() * colors.length)];
        p.style.color = color;

        p.style.left = centerX + "px";
        p.style.top = centerY + "px";

        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 180 + 40;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        p.style.setProperty("--x", `${x}px`);
        p.style.setProperty("--y", `${y}px`);

        container.appendChild(p);

        setTimeout(() => p.remove(), 1400);
    }
}
