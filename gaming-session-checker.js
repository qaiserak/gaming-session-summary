const gameName = "Valorant";
const sessionMinutes = 150;
const matchesPlayed = 4;
const matchesWon = 2;
const isRanked = true;

let matchesLost = matchesPlayed - matchesWon;
console.log(`Number of matches lost = ${matchesLost}`);

if (sessionMinutes <= 120) {
    console.log("The session did not exceed 120 minutes.");
} else if (sessionMinutes > 120) {
    console.log("The session exceeded 120 sessionMinutes.");
}

if (matchesWon > matchesLost) {
    console.log("More matches were won compared to the matches lost.")
} else if (matchesWon < matchesLost) {
    console.log("More matches were lost compared to the matches won.")
} else {
    console.log("The number of matches won were equal to the number of matches lost.")
}

if (isRanked) {
    console.log("The session was ranked.");
}  else {
    console.log("The session was unranked.");
}