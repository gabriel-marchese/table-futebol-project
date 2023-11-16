import ModelMatches from '../database/models/Matches';
import { MatchesModelI } from '../Interfaces/IMatchesModel';
import Matches from '../Interfaces/IMatches';
import modelTeam from '../database/models/team';

export default class MatchesModel implements MatchesModelI {
  private matchesModel = ModelMatches;
  private teamModel = modelTeam;

  async findMatches(inProgress?: boolean | undefined): Promise<Matches[]> {
    const data = await this.matchesModel.findAll({
      where: inProgress !== undefined ? { inProgress } : undefined,
      attributes:
      ['id', 'homeTeamId', 'homeTeamGoals', 'awayTeamId', 'awayTeamGoals', 'inProgress'],
      include: [
        {
          model: modelTeam,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: modelTeam,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });
    return data;
  }

  async finishMatch(id: number): Promise<void> {
    await this.matchesModel.update({ inProgress: false }, { where: { id } });
  }

  async changeMatch(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<void> {
    await this.matchesModel.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }

  async createNewMatch(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<Matches | null> {
    const HomeTeam = await this.teamModel.findByPk(homeTeamId);
    const awayTeam = await this.teamModel.findByPk(awayTeamId);
    if (!HomeTeam || !awayTeam) {
      return null;
    }
    const match = await this.matchesModel
      .create({ homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals, inProgress: true });
    return match;
  }
}
