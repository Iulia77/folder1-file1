const quotes = [
    {
        name: "Oprah Winfrey",
        text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    },

    {
        name: "Steve Jobs",
        text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",

    },

    {
        name: "Walt Disney",
        text: "The way to get started is to quit talking and begin doing.",

    },
    {
        name: "James Cameron",
        text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",

    },
    {
        name: "John Lennon",
        text: "Life is what happens when you're busy making other plans.",
    },

    
];

const author = document.getElementById("author");
const quote = document.getElementById('info');
const randomBtn = document.getElementById("button");

let currentItem = 0;

function showQuote() {
    const item = quotes[currentItem];
    author.textContent = item.name;
    info.textContent = item.text;

}


randomBtn.addEventListener("click", function() {
   currentItem = Math.floor(Math.random() * quotes.length)
   console.log(currentItem);
   showQuote();
});
