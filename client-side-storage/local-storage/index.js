const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');

const personalGreeting = document.querySelector('.personal-greeting');
const h1 = document.querySelector('h1');

const submitButton = document.querySelector('#submit-button');
const resetButton = document.querySelector('#reset-button');

const userNameInput = document.querySelector('#username');

form.addEventListener('submit', e => e.preventDefault());

submitButton.addEventListener('click', () => {
    localStorage.setItem("name", userNameInput.value);

    checkFormVisibility();
});

resetButton.addEventListener('click', () => {
    localStorage.removeItem("name");

    checkFormVisibility();
});

function checkFormVisibility() {
    const username = localStorage.getItem("name");
    if (username) {
        personalGreeting.textContent = `Welcome to our website, ${username}! We hope you have fun while you are here.`
        h1.textContent = `Welcome, ${username}!`;

        rememberDiv.style.display = 'none';
        forgetDiv.style.display = 'block';
    } else {
        personalGreeting.textContent = `Welcome to our website! We hope you have fun while you are here.`
        h1.textContent = `Welcome to our website!`;
        
        rememberDiv.style.display = 'block';
        forgetDiv.style.display = 'none';
    }
}

checkFormVisibility();