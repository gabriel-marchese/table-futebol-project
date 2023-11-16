// import Matches from '../Interfaces/Matches';
import MatchesModel from '../models/matches';

class MatchesService {
  constructor(private matchesModel = new MatchesModel()) {}

  public async findMatches(inProgress: boolean | undefined) {
    const modelResponse = await this.matchesModel.findMatches(inProgress);
    return { status: 'SUCCESSFUL', data: modelResponse };
  }

  public async finishMatch(id: number) {
    await this.matchesModel.finishMatch(id);
    return { status: 'SUCCESSFUL', data: { message: 'finished' } };
  }

  public async changeMatch(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    await this.matchesModel.changeMatch(id, homeTeamGoals, awayTeamGoals);
    return { status: 'SUCCESSFUL', data: { message: 'OK' } };
  }

  public async createNewMatch(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) {
    const modelResponse = await this.matchesModel
      .createNewMatch(homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals);
    if (!modelResponse) {
      return { status: 'NOT_FOUND', data: { message: 'There is no team with such id!' } };
    }
    return { status: 'SUCCESSFUL', data: modelResponse };
  }
}

export default MatchesService;
