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

let numero = 0
let sens = 1
let imgSlide = document.getElementById("slide");
let newP = document.querySelector("p")


let arrow_right = document.querySelector("#banner .arrow_right")
arrow_right.addEventListener("click", () => {
	numero = numero + sens;
    if (numero > slides.length - 1)
	numero = 0;
imgSlide.setAttribute("src", `./assets/images/slideshow/${slides[numero].image}`);
let changeP = `<p id="parag">${slides[numero].tagLine}</p>`
newP.innerHTML= changeP

let pointBlanc = document.querySelectorAll(".dot")
for (var j=0; j < pointBlanc.length; j++) {
	pointBlanc[j].classList.remove("dot_selected")
}
pointBlanc[numero].classList.add("dot_selected")
})

let arrow_left = document.querySelector("#banner .arrow_left")
arrow_left.addEventListener("click", () => {
	numero = numero - sens;
	if (numero < 0)
	numero = slides.length - 1;
	imgSlide.setAttribute("src", `./assets/images/slideshow/${slides[numero].image}`);
changeP = `<p id="parag">${slides[numero].tagLine}</p>`
newP.innerHTML= changeP

let pointBlanc = document.querySelectorAll(".dot")
for (var j=0; j < pointBlanc.length; j++) {
	pointBlanc[j].classList.remove("dot_selected")
}
pointBlanc[numero].classList.add("dot_selected")
})

for (var i = 0; i < slides.length; i++) {
	let nouveauDot = document.createElement("div");
	let parentDot = document.getElementById("dotsContainer");
	parentDot.appendChild(nouveauDot);
	nouveauDot.classList.add("dot")
}
let firstPoint = document.querySelector(".dot")
firstPoint.classList.add("dot_selected")