import * as sinon from 'sinon';
import * as chai from 'chai';
import teamsMock from './mocks/teamsMock'

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import TeamsModel from '../database/models/team';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect, request } = chai;

describe('Testando rota', () => {
  beforeEach(function () { sinon.restore(); })
  it('Testando findAll', async function () {
    // Arrange
    const teamMock = TeamsModel.build(teamsMock.teamsMock[0])
    sinon.stub(TeamsModel, 'findAll').resolves([teamMock]);
    // Act
    const result = await request(app).get('/teams');

    // Assert
    expect(result).to.have.status(200);
    expect(result.body).to.be.deep.equal([teamsMock.teamsMock[0]])
  })
  it('Testando o findById', async function () {
    const teamMock = TeamsModel.build(teamsMock.teamsMock[0])
    sinon.stub(TeamsModel, 'findByPk').resolves(teamMock);

    const result = await request(app).get('/teams/:id');

    expect(result).to.have.status(200);
    expect(result.body).to.be.deep.equal(teamsMock.teamsMock[0])
  })
  it('Testando o erro de findById', async function () {
    sinon.stub(TeamsModel, 'findByPk').resolves(null);
    const result = await request(app).get('/teams/:id');

    expect(result).to.have.status(404);
    expect(result.body).to.be.deep.equal({ message: 'Team not found' })
  })
});
