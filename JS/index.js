const quotes = [
  "Dream big, work hard, stay humble.",
  "Success begins where excuses end.",
  "Small steps every day lead to big results.",
  "Your only limit is your mindset.",
  "Be stronger than your strongest excuse.",
  "Discipline beats motivation every time.",
  "Every challenge is an opportunity in disguise.",
  "Believe in yourself, even when no one else does.",
  "Progress is better than perfection.",
  "Stay patient. Great things take time.",
  "The future belongs to those who never stop learning.",
  "Focus on your goals, not your fears.",
  "Confidence comes from preparation.",
  "Your attitude determines your direction.",
  "Turn your dreams into plans and your plans into reality.",
  "Hard work speaks louder than words.",
  "Be fearless in the pursuit of what sets your soul on fire.",
  "Growth begins outside your comfort zone.",
  "Create a life you don't need a vacation from.",
  "Every day is a new chance to become a better version of yourself."
];
 const button = document.querySelector("button");
 const quote = document.querySelector("h1");

 button.addEventListener('click', () => {
   const randomIndex = Math.floor(Math.random() * quotes.length);
   quote.textContent = quotes[randomIndex];
 }) ; 