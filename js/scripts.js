const green = document.getElementsByClassName('green')[0];
const orange = document.getElementsByClassName('orange')[0];
const pink = document.getElementsByClassName('pink')[0];

if (green && orange && pink) {
    Array.from(gcfe).forEach(element => {
        element.addEventListener('click', () => {
            green.style.opacity = '1';
            green.style.transform = 'rotate(0deg)';
            pink.style.opacity = '0';
            pink.style.transform = 'rotate(-90deg)';
            orange.style.opacity = '0';
            orange.style.transform = 'rotate(-90deg)';
        });
    });

    Array.from(ocfe).forEach(element => {
        element.addEventListener('click', () => {
            orange.style.opacity = '1';
            orange.style.transform = 'rotate(0deg)';
            pink.style.opacity = '0';
            pink.style.transform = 'rotate(0deg)';
            green.style.opacity = '0';
            green.style.transform = 'rotate(-90deg)';
        });
    });

    Array.from(pcfe).forEach(element => {
        element.addEventListener('click', () => {
            pink.style.opacity = '1';
            pink.style.transform = 'rotate(0deg)';
            green.style.opacity = '0';
            green.style.transform = 'rotate(0deg)';
            orange.style.opacity = '0';
            orange.style.transform = 'rotate(-90deg)';
        });
    });
}
