//movement animation to happen
const card = document.querySelector(".card");
//const card2 = document.querySelector(".card2");
const container = document.querySelector(".container");
//const container2 = document.querySelector(".container2");
//items
const title = document.querySelector(".title");
const coffee = document.querySelector(".coffee img");
const finished = document.querySelector(".finished button");
const info = document.querySelector(".info h3");
const types = document.querySelector(".types");
//const title2 = document.querySelector(".title2");
//const coffee2 = document.querySelector(".coffee2 img");
//const finished2 = document.querySelector(".finished2 button");
//const info2 = document.querySelector(".info2 h3");
//const types2 = document.querySelector(".types2");

//moving animation event
container.addEventListener("mousemove", (e) => {
	let centerX = container.offsetLeft + container.offsetWidth / 2;
	let centerY = container.offsetTop + container.offsetHeight / 2;

	let distanceFromCenterX = e.pageX - centerX;
	let distanceFromCenterY = e.pageY - centerY;

	card.style.transform = `rotateX(${distanceFromCenterY/35}deg) rotateY(${distanceFromCenterX/25}deg)`;
});

//animate in
container.addEventListener("mouseenter", (e) => {
	card.style.transition = "none";
	//popout animation
	title.style.transform = "translateZ(150px)";
	coffee.style.transform = "translateZ(200px)";
  	info.style.transform = "translateZ(125px)";
  	types.style.transform = "translateZ(100px)";
 	finished.style.transform = "translateZ(75px)";
});
//animate out (when the mouse is out of the container)
container.addEventListener("mouseleave", (e) => {
	card.style.transition = "all 0.5s ease";
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	//popback animation
	title.style.transform = "translateZ(0px)";
	coffee.style.transform = "translateZ(0px)";
  	info.style.transform = "translateZ(0px)";
  	types.style.transform = "translateZ(0px)";
  	finished.style.transform = "translateZ(0px)";
});


/*
//moving animation event
container2.addEventListener("mousemove", (e) => {
	let centerX = container2.offsetLeft + container2.offsetWidth / 2;
	let centerY = container2.offsetTop + container2.offsetHeight / 2;

	let distanceFromCenterX = e.pageX - centerX;
	let distanceFromCenterY = e.pageY - centerY;

	card2.style.transform = `rotateX(${distanceFromCenterY/35}deg) rotateY(${distanceFromCenterX/25}deg)`;
});

//animate in
container2.addEventListener("mouseenter", (e) => {
	card2.style.transition = "none";
	//popout animation
	title2.style.transform = "translateZ(150px)";
	coffee2.style.transform = "translateZ(200px)";
  	info2.style.transform = "translateZ(125px)";
  	types2.style.transform = "translateZ(100px)";
 	finished2.style.transform = "translateZ(75px)";
});
//animate out (when the mouse is out of the container)
container2.addEventListener("mouseleave", (e) => {
	card2.style.transition = "all 0.5s ease";
	card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
	//popback animation
	title2.style.transform = "translateZ(0px)";
	coffee2.style.transform = "translateZ(0px)";
  	info2.style.transform = "translateZ(0px)";
  	types2.style.transform = "translateZ(0px)";
  	finished2.style.transform = "translateZ(0px)";
});*/