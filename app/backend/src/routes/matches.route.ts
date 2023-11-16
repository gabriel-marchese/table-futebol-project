import { Router } from 'express';
import MatchesController from '../controller/matches';
import tokenValidate from '../middlewares/tokenValidate';
import matchValidate from '../middlewares/matchValidate';

const matchesRouter = Router();

const matchesController = new MatchesController();

matchesRouter.get('/matches', (req, res) => matchesController.showOne(req, res));
matchesRouter.patch(
  '/matches/:id/finish',
  tokenValidate.validateToken,
  (req, res) => matchesController.finishMatch(req, res),
);
matchesRouter.patch(
  '/matches/:id',
  tokenValidate.validateToken,
  (req, res) => matchesController.changeMatch(req, res),
);
matchesRouter.post(
  '/matches',
  tokenValidate.validateToken,
  matchValidate.validateMatch,
  (req, res) => matchesController.createNewMatch(req, res),
);

export default matchesRouter;
