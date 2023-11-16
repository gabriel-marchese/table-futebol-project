export default `SELECT 
teams.team_name AS name,
SUM(CASE
    WHEN matches.away_team_goals > matches.home_team_goals THEN 3
    WHEN matches.away_team_goals = matches.home_team_goals THEN 1
    ELSE 0
END) AS totalPoints,
COUNT(*) AS totalGames,
SUM(CASE
    WHEN matches.away_team_goals > matches.home_team_goals THEN 1 ELSE 0 END) AS totalVictories,
SUM(CASE WHEN matches.away_team_goals = matches.home_team_goals THEN 1 ELSE 0 END) AS totalDraws,
SUM(CASE WHEN matches.away_team_goals < matches.home_team_goals THEN 1 ELSE 0 END) AS totalLosses,
SUM(matches.away_team_goals) AS goalsFavor,
SUM(matches.home_team_goals) AS goalsOwn,
SUM(matches.away_team_goals) - SUM(matches.home_team_goals) AS goalsBalance,
SUM(CASE
    WHEN matches.away_team_goals > matches.home_team_goals THEN 3
    WHEN matches.away_team_goals = matches.home_team_goals THEN 1
    ELSE 0
END) / (COUNT(*) * 3) * 100 AS efficiency
FROM teams
JOIN matches ON teams.id = matches.away_team_id
WHERE matches.in_progress = false
GROUP BY teams.team_name
ORDER BY totalPoints DESC, (goalsFavor - goalsOwn) DESC, goalsFavor DESC;
`;
