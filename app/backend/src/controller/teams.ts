import { Request, Response } from 'express';
import TeamService from '../services/teams';

class teamsController {
  constructor(private teamsService = new TeamService()) {}

  public async showAll(req: Request, res: Response): Promise<Response> {
    const allTeams = await this.teamsService.findAll();
    return res.status(200).json(allTeams.data);
  }

  public async showOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const findOne = await this.teamsService.findOne(Number(id));
    if (findOne.status !== 'SUCCESSFUL') {
      return res.status(404).json(findOne.data);
    }
    return res.status(200).json(findOne.data);
  }
}

export default teamsController;
