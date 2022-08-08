const colors = ["yellow", "red", "green", "blue", "black", "orange", "pink"];
const btn = document.getElementById('button');


btn.addEventListener("click", function() {
   
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
   return Math.floor(Math.random() * colors.length);
}
