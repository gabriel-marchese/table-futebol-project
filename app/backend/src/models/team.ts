import Team from '../Interfaces/ITeam';
import TeamModelInterface from '../Interfaces/ITeamModel';
import TeamModel from '../database/models/team';

class TeamModelTest implements TeamModelInterface {
  private teamModel = TeamModel;

  async findAll(): Promise<Team[]> {
    const data = await this.teamModel.findAll();
    return data.map(({ id, teamName }) => ({ id, teamName }));
  }

  async findById(id: Team['id']): Promise<Team | null> {
    const data = await this.teamModel.findByPk(id);
    return data;
  }
}

export default TeamModelTest;
