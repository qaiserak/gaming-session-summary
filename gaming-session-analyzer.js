let gameName = "Valorant";
let sessionMinutes = 150;
let matchesPlayed = 4;
let matchesWon = 1;
let isRanked = false;

function sessionExceedsOrNot(sessionMinutes) {
    if (sessionMinutes > 120) {
        return "The session exceeded 120 minutes.";
    } else if (sessionMinutes < 120) {
        return "The session did not exceed 120 minutes.";
    } else if (sessionMinutes === 120) {
        return "The session was exactly 120 minutes long.";
    }
}

function winLossComparison(matchesWon, matchesLost) {
    if (matchesWon > matchesLost) {
        return "Player won more matches.";
    } else if (matchesWon < matchesLost) {
        return "Player lost more matches.";
    } else if (matchesWon === matchesLost) {
        return "The number of matches won were equal to the number of matches lost.";
    }
}

function sessionRankedOrNot(isRanked) {
    if (isRanked === true) {
        return "The session was ranked.";
    } else if (isRanked === false) {
        return "The session was unranked.";
    }
}

function generateSessionReport(gameName, sessionMinutes, matchesPlayed, matchesWon, isRanked) {
    const matchesLost = matchesPlayed - matchesWon;
    const result1 = sessionExceedsOrNot(sessionMinutes);
    const result2 = winLossComparison(matchesWon, matchesLost);
    const result3 = sessionRankedOrNot(isRanked);

    return `Game Name: ${gameName} \nSession Duration: ${sessionMinutes} \nNumber of matches played: ${matchesPlayed} \nNumber of matches won: ${matchesWon} \nNumber of matches lost: ${matchesLost} \nDid the session duration exceed 120 minutes? ${result1} \nDid the player win or lose more matches comparatively? ${result2} \nWas the session ranked or unranked? ${result3}`;
}

console.log(generateSessionReport(gameName, sessionMinutes, matchesPlayed, matchesWon, isRanked));
console.log(generateSessionReport("Valorant", 55, 2, 1, true));
console.log(generateSessionReport("Apex Legends", 90, 4, 3, true));