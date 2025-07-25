function showCompliment(e) {
  const compliments = [
    "You're doing amazing, sweetie!",
    "You are sunshine in human form!",
    "You're a queen!👑",
    "You have the best smile!",
    "You are a 10/10!",
    "You have the best style!",
    "You don't have to change a single thing about yourself!",
    "One Direction would definitely have brought you backstage!",
    "You are a literal angel!",
    "You are loved!",
    "You are amazing!",
    "Yo, I think Harry Styles wrote a song about you! It's called Golden!"
  ];

  const randomIndex = Math.floor(Math.random() * compliments.length);
  const randomCompliment = compliments[randomIndex];
  document.getElementById("message").textContent = randomCompliment;

  // Sparkle effect (inside the function!)
  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";

    // Use backticks for template literals, not single quotes
    sparkle.style.left = `${e.clientX - e.target.offsetLeft + Math.random() * 50 - 25}px`;
    sparkle.style.top = `${e.clientY - e.target.offsetTop}px`;

    e.target.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
  }
}
