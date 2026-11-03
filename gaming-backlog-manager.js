const games = ["Valorant", "Valheim", "Helldivers 2", "Control Resonant"];

// Add a game
function addGame(games, game) {
    if (games.includes(game)) {
        return `${game} is already in your backlog.`;
    }

    games.push(game);
    return `${game} added to your backlog.`;
}

// Remove a game
function removeGame(games, game) {
    const index = games.indexOf(game);

    if (index === -1) {
        return `${game} was not found in your backlog.`;
    }

    const removedGame = games.splice(index, 1)[0];
    return `${removedGame} removed from your backlog.`;
}

// Select a random game
function getRandomGame(games) {
    if (games.length === 0) {
        return "No games available to select.";
    }

    const randomIndex = Math.floor(Math.random() * games.length);
    return games[randomIndex];
}

// Get games in reverse order
function getReversedGames(games) {
    const copyArray = [...games];
    return copyArray.reverse();
}

// Main function
function mainFunction(games) {
    const addMessage = addGame(games, "GTA VI");
    const removeMessage = removeGame(games, "Control Resonant");
    const selectedGame = getRandomGame(games);
    const reversedGames = getReversedGames(games);

    return `${addMessage}
${removeMessage}
Randomly selected game: ${selectedGame}
Reversed backlog: ${reversedGames.join(", ")}
Current backlog: ${games.join(", ")}`;
}

console.log(mainFunction(games));