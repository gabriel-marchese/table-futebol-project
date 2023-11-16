import { Router } from 'express';
import TeamsController from '../controller/teams';

const teamsRouter = Router();

const teamsController = new TeamsController();

teamsRouter.get('/teams', (req, res) => teamsController.showAll(req, res));
teamsRouter.get('/teams/:id', (req, res) => teamsController.showOne(req, res));

export default teamsRouter;
