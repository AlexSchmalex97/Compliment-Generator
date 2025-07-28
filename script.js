function showCompliment(e) {
  const compliments = [
    "You're doing amazing, sweetie!",
    "You are sunshine in human form!",
    "Even your book boyfriend is out of your league 😮‍💨😍",
    "Is it even legal to look that good?",
    "Your vibe? IMMACULATE!",
    "You deserve all the things on your vision board",
    "You're literally just amazing. I have no words",
    "STU 👏🏼 NNING!!!!!",
    "Baby you light up my world like nobody else",
    "You're like, REALLY pretty",
    "You're a queen!👑",
    "You have the best smile!",
    "My type on paper!",
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
