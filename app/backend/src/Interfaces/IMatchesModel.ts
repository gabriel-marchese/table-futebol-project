import Matches from './IMatches';

export interface MatchesModelI {
  findMatches(): Promise<Matches[]>
  finishMatch(id: number): void
}
