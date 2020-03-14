function randomColor() {
    return Math.floor(Math.random()*255);
}
const newColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
console.log("startup.js executes...", newColor)
document.querySelector("h1").style.color = newColor;