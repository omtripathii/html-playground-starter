function getQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("quote-text").textContent = data.content;
      document.getElementById("quote-author").textContent = `- ${data.author}`;
      
    })
    .catch((error) => console.error(error));
}

getQuote();
