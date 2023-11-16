import Leaderboards from './ILeaderBoards';

export default interface LeaderboardModelI {
  getInfo(): Promise<Leaderboards[]>
}
