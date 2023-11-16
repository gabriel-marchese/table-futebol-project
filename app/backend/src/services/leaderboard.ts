import LeaderboardModel from '../models/leaderboard';

class LeaderboardService {
  constructor(private leaderboardModel: LeaderboardModel = new LeaderboardModel()) {}

  public async getInfoHome() {
    const modelResponse = await this.leaderboardModel.getInfoHome();
    return { status: 'SUCCESSFUL', data: modelResponse };
  }

  public async getInfoAway() {
    const modelResponse = await this.leaderboardModel.getInfoAway();
    return { status: 'SUCCESSFUL', data: modelResponse };
  }
}

export default LeaderboardService;
