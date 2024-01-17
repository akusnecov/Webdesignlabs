const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const check = document.querySelector(".check");

const slider = document.querySelector(".block__line");

let offset = 0;
let pos = 0;
const imgSrc = [];

function imgUpdate() {
  imgSrc.forEach((item) => {
    slider.innerHTML = `<img src="${item}" alt="" width = "460" height = "270">`;
    console.log("update");
  });
}

let req = fetch("https://randomfox.ca/floof/");

req
  .then((res) => res.json())
  .then((data) => {
    imgSrc.push(data.image);
    console.log("new img");
    imgUpdate();
    console.log("leng = " + imgSrc.length + " pos = " + pos);
  });

next.addEventListener("click", async () => {
  console.log("next");
  if (pos == imgSrc.length - 1) {
    req = await fetch("https://randomfox.ca/floof/");
    const data = await req.json();
    imgSrc.push(data.image);
    console.log("new img");
    console.log("leng = " + imgSrc.length);
    imgUpdate();
  }
  pos = pos >= imgSrc.length ? 0 : pos + 1;

//   offset = offset >= 460 * (imgSrc.length - 1) ? 0 : offset + 460;
//   slider.style.right = `${pos*460}px`;
  console.log("pos = " + pos + " offset = " + offset);
});

prev.addEventListener("click", () => {
  console.log("prev");
  pos = pos <= 0 ? imgSrc.length - 1 : pos - 1;
  offset = pos*460;

  slider.style.right = `${pos}px`;
  console.log("leng = " + imgSrc.length + " pos = " + pos + " offset = " + offset);
});
