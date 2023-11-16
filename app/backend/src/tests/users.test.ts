import * as sinon from 'sinon';
import * as chai from 'chai';
import teamsMock from './mocks/teamsMock'

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UserModel from '../database/models/User';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect, request } = chai;

describe('Testando rota', () => {
  beforeEach(function () { sinon.restore(); })
  it('Testando o login', async function () {
    const userMock = UserModel.build()
  })
});
