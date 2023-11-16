import Team from '../Interfaces/ITeam';
import TeamModelTest from '../models/team';

class TeamsServices {
  constructor(private teamsModel = new TeamModelTest()) {}

  public async findAll() {
    const modelResponse = await this.teamsModel.findAll();
    return { status: 'SUCCESSFUL', data: modelResponse };
  }

  public async findOne(id: Team['id']) {
    const modelResponse = await this.teamsModel.findById(id);
    if (modelResponse === null) {
      return { status: 'NOT_FOUND', data: { message: 'Team not found' } };
    }
    return { status: 'SUCCESSFUL', data: modelResponse };
  }
}

export default TeamsServices;
