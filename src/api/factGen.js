const API_URL = "https://uselessfacts.jsph.pl/random.json?language=en";

export async function getRandomFact() {
    
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.text;

    } catch (error) {
        console.error("Error fetching random fact.", error);
        throw error;
    }
}