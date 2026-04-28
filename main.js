const generateButton = document.getElementById('generate');
const numbersContainer = document.querySelector('.numbers');
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Number Generation Logic
generateButton.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    numbersContainer.innerHTML = '';
    for (const number of sortedNumbers) {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = number;
        numbersContainer.appendChild(numberElement);
    }
});

// Theme Toggle Logic
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
});

function setTheme(theme) {
    if (theme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeBtn.textContent = '🌙';
    } else {
        body.removeAttribute('data-theme');
        themeBtn.textContent = '☀️';
    }
    localStorage.setItem('theme', theme);
}