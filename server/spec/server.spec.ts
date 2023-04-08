import 'jasmine';
import request = require("request-promise");
import { closeServer } from '../server';

const baseUrl = "http://localhost:3000";
const playlistURl = `${baseUrl}/playlist`

describe("O servidor", () => {
  var server:any;

  beforeAll(() => {server = require('../server')});

  afterAll(() => {server.closeServer()});

  

});