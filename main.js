const containerEl = document.querySelector(".container");

for (let index = 0; index < 1000; index++) {
    const colorContainerEL = document.createElement("div")
    colorContainerEL.classList.add("color-container");
    containerEl.appendChild(colorContainerEL);

}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors()

function generateColors() {
    colorContainerEls.forEach((colorContainerEl) => {

        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#"+ newColorCode;
        colorContainerEl.innerText = "#"+ newColorCode;

    });
}

function randomColor() {
    const chars = "0123456789abcdef"
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);

    }
    return colorCode;
}