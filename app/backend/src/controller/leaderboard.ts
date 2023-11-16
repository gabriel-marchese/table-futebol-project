import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard';

class leaderboardController {
  constructor(private leaderboardService: LeaderboardService = new LeaderboardService()) {}

  public async getInfoHome(req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.leaderboardService.getInfoHome();
    return res.status(200).json(serviceResponse.data);
  }

  public async getInfoAway(req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.leaderboardService.getInfoAway();
    return res.status(200).json(serviceResponse.data);
  }
}

export default leaderboardController;
