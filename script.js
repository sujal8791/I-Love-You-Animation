const text = "I Love You Soo Much Hansuu";
let index = 0;

function typeAnimation() {
  const animatedText = document.getElementById("animatedText");
  if (index < text.length) {
    animatedText.innerHTML += text[index];
    index++;
    setTimeout(typeAnimation, 150);
  }
}

window.onload = typeAnimation;
