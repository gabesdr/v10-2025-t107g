import {getRandomFact} from './api/factGen.js';

const factBox = document.querySelector('.fact-box');
const factButton = document.querySelector('.fact-button');

async function displayRandomFact() {
    try {
        const fact =  await getRandomFact();
        factBox.textContent = fact;
    } catch (error) {
        console.error("Failed to load a random fact:", error);
        factBox.textContent = "Failed to load a random fact. Please try again.";
    }
}

factButton.addEventListener('click', displayRandomFact);