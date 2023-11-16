import Team from './ITeam';

export default interface TeamModel {
  findAll(): Promise<Team[]>
  findById(id: number): Promise<Team | null>
}
