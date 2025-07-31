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
    "You'd 100% be the diamond of the season",
    "You could lead your own show — cue the theme song and glittery graphics.",
    "You're giving peak 2000s intro montage energy — and I’m obsessed.",
    "You're a queen!👑",
    "You're 100% cooler than the water from Avatar's Northern Water Tribe.",
    "You're my lobster 🦞",
    "Could you <i>be</i> any more amazing?",
    "You’re worthy — Mjolnir would 100% choose you.",
    "You shine brighter than Edward in the sunlight.",
    "You have the best smile!",
    "You know that moment in the movies where theres a glow, everything's slow motion, and theres a chorus singing in the background? yea, well, i think thats what I just experienced when i saw you.",
    "My type on paper!",
    "Even the Epcot Ball calls <strong><i>YOU</i></strong> the <i>'prettiest girl in school'</i>",
    "You're my personal brand of heroin 😅",
    "You are a 10/10!",
    "You have the best style!",
    "You don't have to change a single thing about yourself!",
    "You bring balance to the Force — and my day.",
    "You're the Obi-Wan to my Anakin — except, you know, healthy.",
    "You're more iconic than the 'No Control' dance.",
    "I’d walk to Mordor and back just to see your smile.",
    "One Direction would definitely have brought you backstage!",
    "You give off main character energy in a slow-burn romantasy.",
    "You are a literal angel!",
    "You’re so Suite, you’d fit right in at the Tipton.",
    "You are loved!",
    "You keep me on my toes like a psychological thriller — but way more comforting.",
    "You’ve got the bravery of a Gryffindor and the heart of a Hufflepuff.",
    "You are amazing!",
    "You're a five-star read.",
    "Yo, I think Harry Styles wrote a song about you! It's called Golden!"
  ];

  const randomIndex = Math.floor(Math.random() * compliments.length);
  const randomCompliment = compliments[randomIndex];
  document.getElementById("message").innerHTML = randomCompliment;

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
