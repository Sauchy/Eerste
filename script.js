const button = document.querySelector('button');
button.addEventListener('click', () => {
    const randomcolor = '#' + Math.floor(Math.random()*16777215).toString(16);
    button.style.backgroundColor = randomcolor;
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';

});
