let game = "Helldivers 2";
let playtime = "two hours";
const playerName = "   KiP   ";

const cleanPlayerName = playerName.trim();
let cleanSummary = `${cleanPlayerName} played ${game} for ${playtime}.`;
console.log(cleanSummary);

game = "Valorant";
playtime = "one hour";
cleanSummary = `${cleanPlayerName} played ${game} for ${playtime}.`;
console.log(cleanSummary);

const question = "Does the latest summary contain the game title?";
let answer = cleanSummary.includes(game);
console.log(question);
console.log(answer);



