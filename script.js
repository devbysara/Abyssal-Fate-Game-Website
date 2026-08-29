const scenes =  document.querySelectorAll('.scene');
const lightBox = document.getElementById('lightbox');
const lightBoxImg = document.getElementById('lightbox-img');
const lightBoxClose = document.getElementById('lightbox-close');

scenes.forEach(scene => {
    scene.addEventListener('click', () => {
        lightBoxImg.src = scene.dataset.img;
        lightBox.classList.add('active');
    });
});

lightBox.addEventListener('click', () => {
    lightBox.classList.remove('active');
    lightBoxImg.src = '';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightBox.classList.remove('active');
        lightBoxImg.src = '';
    }
});

lightBoxClose.addEventListener('click', (e) => {
    e.stopPropagation();
    lightBox.classList.remove('active');
    lightBoxImg.src = '';
});