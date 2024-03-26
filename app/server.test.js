const supertest = require('supertest');
const http = require('http');

let server;
let request;

beforeAll((done) => {
  server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo\n');
  });
  server.listen(0, '127.0.0.1', () => {
    const { address, port } = server.address();
    request = supertest(`http://${address}:${port}`);
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe('HTTP Server', () => {
  it('should respond with Hola Mundo', async () => {
    const response = await request.get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hola Mundo\n');
  });
});
