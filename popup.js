const quoteElement = document.getElementById("quote");
const button = document.getElementById("new-quote");

async function fetchQuote() {
  try {
    quoteElement.textContent = "Loading...";
    const res = await fetch("https://api.quotable.io/quotes/random");
    const data = await res.json();
    const quote = data[0]; // Because it's returned in an array
    quoteElement.textContent = `"${quote.content}" — ${quote.author}`;
  } catch (error) {
    quoteElement.textContent = "Failed to fetch quote.";
    console.error("Fetch error:", error); // helpful for debugging
  }
}

button.addEventListener("click", fetchQuote);
fetchQuote();
