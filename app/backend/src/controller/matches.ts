import { Request, Response } from 'express';
import MatchesService from '../services/matches';

class matchesController {
  constructor(private matchesService = new MatchesService()) {}

  public async showOne(req: Request, res: Response): Promise<Response> {
    const inProgress: boolean | undefined = req.query.inProgress
      ? req.query.inProgress === 'true' : undefined;
    const allMatches = await this.matchesService.findMatches(inProgress);
    return res.status(200).json(allMatches.data);
  }

  public async finishMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const serviceResponse = await this.matchesService.finishMatch(Number(id));
    return res.status(200).json(serviceResponse.data);
  }

  public async changeMatch(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const serviceResponse = await this.matchesService
      .changeMatch(Number(id), Number(homeTeamGoals), Number(awayTeamGoals));
    return res.status(200).json(serviceResponse.data);
  }

  public async createNewMatch(req: Request, res: Response): Promise<Response> {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
    const serviceResponse = await this.matchesService.createNewMatch(
      Number(homeTeamId),
      Number(awayTeamId),
      Number(homeTeamGoals),
      Number(awayTeamGoals),
    );
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(404).json(serviceResponse.data);
    }
    return res.status(201).json(serviceResponse.data);
  }
}

export default matchesController;
