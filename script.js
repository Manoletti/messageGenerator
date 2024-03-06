tarotCards = ["0. The Fool", "I. The Magician", "II. The High Priestess", "III. The Empress", "IV. The Emperor", "V. The Hierophant", "VI. The Lovers", "VII. The Chariot", "VIII. Justice", "IX. The Hermit", "X. The Wheel of Fortune", "XI. Strength", "XII. The Hanged Man", "XIII. Death", "XIV. Temperance", "XV. The Devil", "XVI. The Tower", "XVII. The Star", "XVIII. The Moon", "XIX. The Sun", "XX. Judgement", "XXI. The World"];

const tarotReading = () => {
    let reading = tarotCards[Math.floor(Math.random() * 22)];
    return reading;
}

const threeCards = () => {
    let past = tarotReading();
    let present = tarotReading();
    let future = tarotReading();
    return [`Your past was marked by ${past}.`, `Your present is affected by ${present}.`, `Your future will be determined by ${future}.`];
}

let result = threeCards();

result.forEach(item => console.log(item));