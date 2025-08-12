(function () {
  // Run whether or not the script is deferred
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function init() {
    // Find or create target nodes so nothing silently fails
    let btn = document.getElementById("complimentBtn");
    let msg = document.getElementById("message");

    if (!msg) {
      msg = document.createElement("p");
      msg.id = "message";
      (btn?.parentNode || document.body).insertBefore(msg, btn || null);
    }
    if (!btn) {
      btn = document.createElement("button");
      btn.id = "complimentBtn";
      btn.textContent = "Give me a compliment";
      document.body.appendChild(btn);
    }

    btn.addEventListener("click", showCompliment);
  }

  function showCompliment(e) {
    try {
      const compliments = [
        "You're doing amazing, sweetie!",
        "I <i>burn</i> for you- or whatever Simon Basset said",
        "As a wise man named Joey once said, 'how you doin'?'",
        "You could've won the Saja Boys over easily",
        "Can you just bottle up some of that perfection? You'd make BANK!",
        "It's the way the whole world stopped when you got here. Like, forget all the other people asking for compliments, look at YOU!",
        "You are sunshine in human form!",
        "Your energy could power the Millennium Falcon on a Kessel Run.",
        "Even your book boyfriend is out of your league 😮‍💨😍",
        "Is it even legal to look that good?",
        "What's cookin, good lookin?",
        "If life were an anime, you'd have the best opening theme.",
        "Your vibe? IMMACULATE!",
        "You give off the best vibes!",
        "Your kindness hits harder than an Avada Kedavra — but, you know, in a good way.",
        "You're the One Ring — precious and completely unforgettable.",
        "Your heart is bigger than Appa's flying bison saddle.",
        "You're golden",
        "I was enchanted to meet you",
        "You're a solid 1000/10. No doubt",
        "You could have sealed the honeymoon based on just vibes",
        "You are the reason someone smiles.",
        "There is someone out there who is smiling at the thought of you. And someone is with them saying 'who got you smiling like that?!'.",
        "Remember when you used to pray for what you've got right now? Look at you go!",
        "You've got this.",
        "You've got that james dean daydream look in your eye",
        "You have the best energy!",
        "You're GOLDEN!",
        "You look like you'd have two extremely attractive brothers wrapped around your finger in an early 2000's CW tv show.",
        "You're my little soda pop",
        "I feel like you're not hyped enough. Like, you deserve a whole parade. An international holiday. Why are there no statues of you?!? Who do I need to sue?",
        "Whatever you're procrastinating, go do it. You're gonna kill it ✨",
        "There's someone out there who's wishing to be more like you. Yea, you're just <i>that</i> awesome.",
        "How can I get more of you? Who do I need to call? I just can't get enough of ya",
        "Preeeeeetty sure that One Direction wrote 'Gotta Be You' about, well, You.",
        "You're as dependable as Samwise with second breakfast.",
        "You <i>do</i> know that it's common decency to leave some awesomeness for the rest of us, right? You're making the rest of us look bad!!!",
        "I don't know if anyone's told you lately, but you're pretty freaking awesome.",
        "You deserve all the things on your vision board",
        "You know that thing you really wanna do but are too scared to do? You can do it. I mean, how hard can it be? Boys do it.",
        "Lord Farquaad would have picked you over Fiona",
        "You're literally just amazing. I have no words",
        "You make the whole place ✨shimmer✨",
        "You're the chaotic-good energy keeping the party alive.",
        "Someone has your name and theirs surrounded by a heart in their journal, somewhere.",
        "STU 👏🏼 NNING!!!!!",
        "You are my favourite person.",
        "I feel like cats love you. That's a compliment, btw",
        "Baby you light up my world like nobody else",
        "I bet your Eras Tour outfit was dazzling!",
        "I'm almost certain that there are dozens of songs and poems written about you in past lives.",
        "You should have been Justin Bieber's 'One Less Lonely Girl', and you know it.",
        "Has anyone told you how gorgeous you are? Well, you're really freaking gorgeous.",
        "Taylor Swift wrote 'Gorgeous' about you. Just thought you should know.",
        "You are SO pretty. Like, photo of you in a soldier's chest pocket when he goes to war, aged husband has a photo of you in his wallet, photo in a locket sort of beautiful.",
        "Not sure if I wanna marry you or be you, but until I figure it out, what's your makeup routine?",
        "Literally any of the guys in your favourite 2012 sci-fi would have been lucky to have you.",
        "Did you know that the most gorgeous person is actually reading from a compliment generator right now? Wait, that's you!!!",
        "I honestly think you could have fixed Ben Solo. No, that's not my delusion talking.",
        "You? 10/10 recommend. 5 stars on Yelp 🌟🌟🌟🌟🌟",
        "You're so beautiful, Pete Davidson has you on his waitlist.",
        "A walking green flag",
        "You are sunshine on a cloudy day",
        "You shine with the light from the sun, or whatever Paolo said to Lizzy",
        "You are what Lizzie McGuire was singing about when she said 'this is what dreams are made of' btw.",
        "What's a computer gotta do to get your number? Wait, is that too weird? Nvm I'm shy",
        "I'd still love you if you were a worm.",
        "You're my favourite genre of people. And I don't really like people. You're welcome.",
        "I think Benson Boone wrote 'Beautiful Things' about you.",
        "I love you more than the world loves Nicolandria",
        "I put you on my Christmas list this year, I hope that's okay",
        "I love you more than a millennial loves side parts",
        "Your tumblr era went crazy, I just know it.",
        "You're like, REALLY pretty",
        "You'd 100% be the diamond of the season",
        "You could lead your own show — cue the theme song and glittery graphics.",
        "You're giving peak 2000s intro montage energy — and I'm obsessed.",
        "You're a queen!👑",
        "You're more comforting than Joey's favorite sandwich.",
        "You're more precious than the One Ring (and a lot less cursed).",
        "You've got me acting like it's 2013 and I'm back in my fangirl era - in the best way!",
        "You're 100% cooler than the water from Avatar's Northern Water Tribe.",
        "You're my lobster 🦞",
        "Could you <i>be</i> any more amazing?",
        "You're worthy — Mjolnir would 100% choose you.",
        "You shine brighter than Edward in the sunlight.",
        "OMG DID YOU HEAR!? THERE'S A REALLY HOT PERSON READING THIS- oh, wait, it's YOU!!!",
        "You have the best smile!",
        "You know that moment in the movies where there's a glow, everything's slow motion, and there's a chorus singing in the background? yea, well, I think that's what I just experienced when I saw you.",
        "My type on paper!",
        "Even the Epcot Ball calls <strong><i>YOU</i></strong> the <i>'prettiest girl in school'</i>",
        "You're my personal brand of heroin 😅",
        "You are a 10/10!",
        "You have the best style!",
        "You don't have to change a single thing about yourself!",
        "You bring balance to the Force — and my day.",
        "You're the Obi-Wan to my Anakin — except, you know, healthy.",
        "You're more iconic than the 'No Control' dance.",
        "I'd walk to Mordor and back just to see your smile.",
        "One Direction would definitely have brought you backstage!",
        "You give off main character energy in a slow-burn romantasy.",
        "You are a literal angel!",
        "You're so Suite, you'd fit right in at the Tipton.",
        "You are loved!",
        "You keep me on my toes like a psychological thriller — but way more comforting.",
        "You've got the bravery of a Gryffindor and the heart of a Hufflepuff.",
        "You are amazing!",
        "You're a five-star read.",
        "Yo, I think Harry Styles wrote a song about you! It's called Golden!"
      ];

      const randomIndex = Math.floor(Math.random() * compliments.length);
      document.getElementById("message").innerHTML = compliments[randomIndex];

      // Sparkles (only if we have a target + pointer coords)
      if (!e || !e.target || typeof e.clientX !== "number") return;
      const rect = e.target.getBoundingClientRect();
      for (let i = 0; i < 10; i++) {
        const s = document.createElement("div");
        s.className = "sparkle";
        s.style.position = "absolute";
        s.style.left = (e.clientX - rect.left + Math.random() * 50 - 25) + "px";
        s.style.top = (e.clientY - rect.top) + "px";
        e.target.appendChild(s);
        setTimeout(() => s.remove(), 600);
      }
    } catch (err) {
      // Surface errors on-page so mobile Safari/Chrome show something
      const m = document.getElementById("message");
      m.textContent = "Error: " + (err && err.message ? err.message : String(err));
    }
  }
})();