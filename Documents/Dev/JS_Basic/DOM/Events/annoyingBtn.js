const btn = document.querySelector('button');

btn.addEventListener('mouseover', function () {
    console.log('MOUSED OVER ME!');
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);

    // style.left 따위의 값은 string이 들어가야 되므로 template literal을 사용한다.
    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`;
});

// 이제 버튼을 랜덤하게 옮기고 싶은데
// 그냥 0~1000 사이 숫자를 랜덤하게 줄 수는 없다. 사람마다 해상도가 다르기 때문에 1000 이상의 해상도일 수도 있고 아닐 수도 있고.. 그럼 어떻게 할까?

// window.screen property 이용하기
// it has things like availableHeight, availableWidth

// window.innerHeight 이용하기
// window.innerWidth 이용하기


btn.addEventListener('click', function () {
    btn.innerText = 'YOU GOT ME!';
    document.body.style.backgroundColor = 'green';
})