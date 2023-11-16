import { QueryTypes } from 'sequelize';
import db from '../database/models';
import Leaderboards from '../Interfaces/ILeaderBoards';
import leaderboardHome from '../utils/homeQuery';
import leaderboardAway from '../utils/awayQuery';

class LeaderboardModel {
  private db = db;
  async getInfoHome(): Promise<Leaderboards[]> {
    const response = await this.db.query(leaderboardHome, {
      type: QueryTypes.SELECT,
    }) as Leaderboards[];
    return response;
  }

  async getInfoAway(): Promise<Leaderboards[]> {
    const response = await this.db.query(leaderboardAway, {
      type: QueryTypes.SELECT,
    }) as Leaderboards[];
    return response;
  }
}

export default LeaderboardModel;
