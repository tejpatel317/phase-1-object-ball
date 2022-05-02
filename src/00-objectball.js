function gameObject() {
    const theObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: { 
                "Alan Anderson" : {
                    number : 0,
                    shoe : 16,
                    points : 22,
                    rebounds : 12,
                    assists : 12,
                    steals : 3,
                    blocks : 1,
                    slamDunks : 1,
                },
                "Reggie Evans" : {
                    number : 30,
                    shoe : 14,
                    points : 12,
                    rebounds : 12,
                    assists : 12,
                    steals : 12,
                    blocks : 12,
                    slamDunks : 7,
                },
                "Brook Lopez" : {
                    number : 11,
                    shoe : 17,
                    points : 17,
                    rebounds : 19,
                    assists : 10,
                    steals : 3,
                    blocks : 1,
                    slamDunks : 15,
                },
                "Mason Plumlee" : {
                    number : 1,
                    shoe : 19,
                    points : 26,
                    rebounds : 12,
                    assists : 6,
                    steals : 3,
                    blocks : 8,
                    slamDunks : 5,
                },
                "Jason Terry" : {
                    number : 31,
                    shoe : 15,
                    points : 19,
                    rebounds : 2,
                    assists : 2,
                    steals : 4,
                    blocks : 11,
                    slamDunks : 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turqoise", "Purple"],
            players: {
                "Jeff Adrien" : {
                    number : 4,
                    shoe : 18,
                    points : 10,
                    rebounds : 1,
                    assists : 1,
                    steals : 2,
                    blocks : 7,
                    slamDunks : 2,
                },
                "Bismak Biyombo" : {
                    number : 0,
                    shoe : 16,
                    points : 12,
                    rebounds : 4,
                    assists : 7,
                    steals : 7,
                    blocks : 15,
                    slamDunks : 10,
                },
                "DeSagna Diop" : {
                    number : 2,
                    shoe : 14,
                    points : 24,
                    rebounds : 12,
                    assists : 12,
                    steals : 4,
                    blocks : 5,
                    slamDunks : 5,
                },
                "Ben Gordon" : {
                    number : 8,
                    shoe : 15,
                    points : 33,
                    rebounds : 3,
                    assists : 2,
                    steals : 1,
                    blocks : 1,
                    slamDunks : 0,
                },
                "Bredan Haywood" : {
                    number : 33,
                    shoe : 15,
                    points : 6,
                    rebounds : 12,
                    assists : 12,
                    steals : 22,
                    blocks : 5,
                    slamDunks : 12,
                },
            },
        },
    }

    return theObject;
}

function numPointsScored(playername) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players
            for (let playerKey in playerObj) {
                if (playerKey === playername) {
                    return playerObj[playerKey].points
                }
            }
        }
    }
}

function shoeSize(playername) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players
            for (let playerKey in playerObj) {
                if (playerKey === playername) {
                    return playerObj[playerKey].shoe
                }
            }
        }
    }
}

function teamColors(teamInput) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) 
        if (teamObj[teamKey] === teamInput) {
            return teamObj.colors;
        }
    }
}

function teamName() {
    let game = gameObject();
    let homeTeam = game.home.teamName;
    let awayTeam = game.away.teamName;
    let teamArray = [homeTeam, awayTeam]
    return teamArray;
}

function playerNumbers(teamInput) {
    let game = gameObject();
    let jerseyArray = [];
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            if (teamObj[teamKey] === teamInput) {
                let playerObj = teamObj.players
                for (let playerKey in playerObj) {
                    jerseyArray.push(playerObj[playerKey].number)
                }
            }
        }
    }
    return jerseyArray;
}

function playerStats(playername) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players
            for (let playerKey in playerObj) {
                if (playerKey === playername) {
                    return playerObj[playerKey]
                }
            }
        }
    }
}

function bigShoeRebounds() {
    let game = gameObject();
    let maximumPointTracker = 0;
    let playerRebounds = 0;
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players
            for (let playerKey in playerObj){
                if (playerObj[playerKey].shoe > maximumPointTracker) {
                    maximumPointTracker = playerObj[playerKey].shoe
                    playerRebounds = playerObj[playerKey].rebounds;
                }
            }
        }
    }
    return playerRebounds;
}