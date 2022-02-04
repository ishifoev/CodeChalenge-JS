//O(n) time and O(k) time
//Tournament Winner

const HOME_TEAM_WON = 1;

function tournamenWinner(competition, results) {
    let currentBaseTeam = '';

    const scores = { [currentBaseTeam]: 0};

    for(let i = 0; i < competition.length; i++) {
        const result = results[i];

        const[homeTeam, awayTeam] = competition[i];

        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

        updateScores(winningTeam, 3, scores)

        if(scores[winningTeam] > scores[currentBaseTeam]) {
            currentBaseTeam = winningTeam;
        }
        return currentBaseTeam
    }
}
competition([
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML'],
],
[0, 0, 1]
);

function updateScores(team, points, scores) {
    if(!(team in scores)) scores[team] = 0

    scores[team] += points
}