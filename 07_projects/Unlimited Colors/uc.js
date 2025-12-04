const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// console.log(randomColor());
let intervalid;

const startChangingColors = () => {
    intervalid = setInterval(changeColor, 1000);

    function changeColor() {
    document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColors = () => {
    clearInterval(intervalid);
}


document.querySelector("#start").addEventListener("click", startChangingColors);
document.querySelector("#stop").addEventListener("click", stopChangingColors);