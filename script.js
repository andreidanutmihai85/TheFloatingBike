




const subcontainer = document.querySelector("[subcontiner]");

const randomZposition = () => {
	const randomNumber = Math.floor(Math.random() * 2000) + 1;

	return randomNumber % 2 === 0 ? randomNumber : -randomNumber;
};

const randomBlur = (zPosition) => {
	let positivePositionValue = Math.abs(zPosition);
	let positionString = positivePositionValue.toString().padStart(4, "0");
	let stringArr = positionString.split("");
	stringArr.splice(2, 0, ".");
	let finalString = stringArr.join("");
	return finalString;
};

const createCircle = () => {
	const circle = document.createElement("div");
	let position = randomZposition();
	circle.classList.add("circle");
	circle.style.top = `${Math.floor(Math.random() * window.innerHeight) + 1}px`;
	circle.style.left = `${Math.floor(Math.random() * window.innerWidth) + 1}px`;
	circle.style.setProperty("--z-position", `${position}px`);
	circle.style.setProperty("--blur-value", `${randomBlur(position)}px`);
	circle.style.setProperty("--hue", `${Math.floor(Math.random() * 361)}`);
	subcontainer.appendChild(circle);
};

for (let i = 0; i < 350; i++) {
	createCircle();
}





const pinkButton = document.querySelector('[pink]')
const redButton = document.querySelector('[red]')
const blueButton = document.querySelector('[blue]')
const brownButton = document.querySelector('[brown]')
const blackButton = document.querySelector('[black]')


const div = document.querySelector('body');

pinkButton.addEventListener('click', () => {
	const element = document.querySelector('body');
	element.style.backgroundColor = 'green';

});
redButton.addEventListener('click', () => {
    const element = document.querySelector('body');
	element.style.backgroundColor = 'red';
	

});


blueButton.addEventListener('click', () => {
	const element = document.querySelector('body');
	element.style.backgroundColor = 'blue';

});
brownButton.addEventListener('click', () => {
	const element = document.querySelector('body');
	element.style.backgroundColor = 'brown';

});
blackButton.addEventListener('click', () => {
	const element = document.querySelector('body');
	element.style.backgroundColor = 'black';

});