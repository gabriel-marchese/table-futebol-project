import { Router } from 'express';
import LeaderboardController from '../controller/leaderboard';

const leaderboardRouter = Router();
const leaderboardController = new LeaderboardController();

leaderboardRouter.get('/leaderboard/home', (req, res) => leaderboardController
  .getInfoHome(req, res));
leaderboardRouter.get('/leaderboard/away', (req, res) => leaderboardController
  .getInfoAway(req, res));
leaderboardRouter.get('/leaderboard', (req, res) => leaderboardController
  .getInfoHome(req, res));
export default leaderboardRouter;
