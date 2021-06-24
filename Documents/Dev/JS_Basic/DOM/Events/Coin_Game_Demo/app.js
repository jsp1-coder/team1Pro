
/*
// Logic to detect if two elements on the DOM are overlapping (avatar and coin) then we can move the coin?
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


// select the image..
const avatar = document.querySelector('#player');
// select the coin
const coin = document.querySelector('#coin');

// in most browsers, keypress isn't for arrow keys
// so we'll use keyup

window.addEventListener('keyup', function (e) {
	// console.log(e.key);
	// 높이 위치를 +50 씩 더하고 싶다면..
	// 먼저 avatar.style.top의 위치를 갖고와서 '200px' 거기에서 px 를 떼어내고 남은 '200'을 number로 바꿔야 함. 따로 함수를 만들자.

	// IE에서는 이름이 'Down' 임..
	if (e.key === 'ArrowDown' || e.key === 'Down') {
		const currTop = extractPosition(avatar.style.top);
		avatar.style.top = `${currTop + 50}px`;
	} else if (e.key === 'ArrowUp' || e.key === 'Up') {
		const currTop = extractPosition(avatar.style.top);
		avatar.style.top = `${currTop - 50}px`;
	} else if (e.key === 'ArrowRight' || e.key === 'Right') {
		const currLeft = extractPosition(avatar.style.left);
		avatar.style.left = `${currLeft + 50}px`;

		// 오른쪽으로 갈 때는 이미지 제자리
		avatar.style.transform = 'scale(1,1)'
	} else if (e.key === 'ArrowLeft' || e.key === 'Left') {
		const currLeft = extractPosition(avatar.style.left);
		avatar.style.left = `${currLeft - 50}px`;

		// 왼쪽으로 갈 때는 이미지 왼쪽 반전
		avatar.style.transform = 'scale(-1,1)'

		// after we move the avatar
		if (isTouching(avatar, coin)) {
			moveCoin();
		}
	}
})

// 현재 avatr.style.top 은 empty string '' 임. 인라인 포지션이 없어서.
const extractPosition = (position) => {
	if (!position) { // NaN is falsy, '' is falsy
		return 100;
	}
	return parseInt(position.slice(0, -2));
}

// the coin moves to random spots on the page
// when you touch the coin, it'll move again

// to move the coin...
const moveCoin = () => {
	// it tells me the available height 현재 window의 크기.
	const x = Math.floor(Math.random() * window.innerWidth);
	const y = Math.floor(Math.random() * window.innerHeight);
	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;
};

moveCoin(); // execute it so when you refresh the page the coin can be somewhere else

*/


//************************************* 
// REFACTOR
//************************************* 



function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


// select the image..
const avatar = document.querySelector('#player');
// select the coin
const coin = document.querySelector('#coin');

const score = document.querySelector('#score');
let actualScore = 0;
score.innerText = `Current Score : ${actualScore}`;

// in most browsers, keypress isn't for arrow keys
// so we'll use keyup

window.addEventListener('keyup', function (e) {
	// console.log(e.key);
	// 높이 위치를 +50 씩 더하고 싶다면..
	// 먼저 avatar.style.top의 위치를 갖고와서 '200px' 거기에서 px 를 떼어내고 남은 '200'을 number로 바꿔야 함. 따로 함수를 만들자.

	// IE에서는 이름이 'Down' 임..
	if (e.key === 'ArrowDown' || e.key === 'Down') {
		moveVertical(avatar, 50)

	} else if (e.key === 'ArrowUp' || e.key === 'Up') {
		moveVertical(avatar, -50)

	} else if (e.key === 'ArrowRight' || e.key === 'Right') {
		moveHorizontal(avatar, 50);
		// 오른쪽으로 갈 때는 이미지 제자리
		avatar.style.transform = 'scale(1,1)'
	} else if (e.key === 'ArrowLeft' || e.key === 'Left') {
		moveHorizontal(avatar, -50);

		// 왼쪽으로 갈 때는 이미지 왼쪽 반전
		avatar.style.transform = 'scale(-1,1)'

		// after we move the avatar
		if (isTouching(avatar, coin)) {
			moveCoin();
			actualScore++;
			score.innerText = `Current Score : ${actualScore}`;
		}
	}
});

const moveVertical = (element, amount) => {
	const currTop = extractPosition(element.style.top);
	element.style.top = `${currTop + amount}px`;
}

const moveHorizontal = (element, amount) => {
	const currLeft = extractPosition(element.style.left);
	element.style.left = `${currLeft + amount}px`;
}


// 현재 avatr.style.top 은 empty string '' 임. 인라인 포지션이 없어서.
const extractPosition = (position) => {
	if (!position) { // NaN is falsy, '' is falsy
		return 100;
	}
	return parseInt(position.slice(0, -2));
}

// the coin moves to random spots on the page
// when you touch the coin, it'll move again

// to move the coin...
const moveCoin = () => {
	// it tells me the available height 현재 window의 크기.
	const x = Math.floor(Math.random() * window.innerWidth);
	const y = Math.floor(Math.random() * window.innerHeight);
	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;
};

moveCoin(); // execute it so when you refresh the page the coin can be somewhere else

