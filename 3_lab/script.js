const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const slider = document.querySelector(".block__line");

let offset = 0;

const imgSrc = ["images/3EZG056e5RwXppCWiqdIbw.jpeg","images/1675428174_gas-kvas-com-p-fonovie-risunki-mainkraft-44.jpg", "images/c4fccb8cfad73c0b04adf48cf271978f.jpg", "images/minecraft-featured.webp", "images/minecraft.jpg"];

imgSrc.forEach((imgSrc) =>{
    slider.innerHTML += `<img src="${imgSrc}" alt="" width = "460" height = "270">`
    console.log("2")
});

next.addEventListener('click', () => {
    offset = offset >= 480*(imgSrc.length -1) ? 0 :offset + 460;
    slider.style.right = `${offset}px`;
    console.log("3")
})
prev.addEventListener('click', () => {
    offset = offset <= 0 ? 480*(imgSrc.length -1) : offset - 460;
    slider.style.right = `${offset}px`;
})