import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server';

chai.use(chaiHttp);

describe('Sample Controller', () => {
    it('Should return response with status 200', (done) => {
        chai.request(server)
            .get('/api/sample')
            .end((err, res) => {
                expect(res.status).equals(200);
                done();
            });          
    });
});
