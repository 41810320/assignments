var changeBtn = document.getElementById("changeBtn");

var quoteOutput = document.getElementById("quoteOutput");
var quoteAuthor = document.getElementById("quoteAuthor");



function generateQuote() {

    var quotes = [
        { quote: `"It's not what happens to you, but how you react to it that matters." `, author: `--Epictetus` },

        { quote: `"Do not take life too seriously. You will not get out alive." `, author: `--Elbert Hubbard` },

        { quote: `"The best revenge is massive success." `, author: `--Frank Sinatra` },

        { quote: `"Resentment is like drinking poison and waiting for your enemies to die." `, author: `--Nelson Mandela` },
    ]

    var random = Math.trunc(Math.random() * quotes.length);

    quoteOutput.innerHTML = quotes[random].quote;
    authorOutput.innerHTML = quotes[random].author;
}

changeBtn.addEventListener("click", generateQuote);