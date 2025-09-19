const slides = [
{
	"image":"slide1.jpg",
	"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
},
{
	"image":"slide2.jpg",
	"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
},
{
	"image":"slide3.jpg",
	"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
},
{
	"image":"slide4.png",
	"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
}
]

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("dot_selected");
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlide();
  });
});

rightArrow.addEventListener("click", () => {
   currentIndex = (currentIndex + 1) % slides.length;
   updateSlide();
});

leftArrow.addEventListener("click", () => {
   currentIndex = (currentIndex - 1 + slides.length) % slides.length;
   updateSlide();
});

function updateSlide() {
  bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
  bannerText.innerHTML = slides[currentIndex].tagLine;

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentIndex);
  });
}

