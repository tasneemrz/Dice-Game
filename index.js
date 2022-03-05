
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSrc = "images/" + "dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImageSrc);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSrc = "images/" + "dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImageSrc);


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
}
else if(randomNumber1 === randomNumber2)
{
    document.querySelector("h1").textContent = "Draw!"
}
