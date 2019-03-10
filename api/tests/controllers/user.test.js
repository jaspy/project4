const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../testServer');

chai.use(chaiHttp);
chai.should();

describe('/users', () => {
  describe('GET /users', () => {
    it('should get all users records', done => {
      chai
        .request(app)
        .get('/users/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
