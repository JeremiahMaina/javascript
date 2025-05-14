
function changeText() {
  const heading = document.getElementById("mainHeading");
  heading.textContent = "Welcome to Dynamic JavaScript!";
}

function changeStyle() {
  const image = document.getElementById("styling");
  image.style.border = "10px dashed crimson";
  image.style.boxShadow = "0 0 10px #000";
  image.style.transform = "rotate(5deg)";
}

let quoteAdded = false;

function toggleQuote() {
  const container = document.getElementById("quoteContainer");

  if (!quoteAdded) {
    const quote = document.createElement("p");
    quote.id = "dynamicQuote";
    quote.textContent = "Success is not final, failure is not fatal: It is the courage to continue that counts.";
    quote.style.fontStyle = "italic";
    quote.style.color = "green";
    container.appendChild(quote);
    quoteAdded = true;
  } else {
    const quote = document.getElementById("dynamicQuote");
    if (quote) {
      container.removeChild(quote);
    }
    quoteAdded = false;
  }
}
