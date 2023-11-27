const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Replace with the path to your app's entry file
const should = chai.should();

chai.use(chaiHttp);

describe('User Sign-in API', () => {
  // Test case for not signing in with incomplete fields
  it('should not sign in with incomplete fields', (done) => {
    chai.request(app)
      .post('/usersignin')
      .send({
        email: 'incomplete@example.com',
        // Missing password field
      })
      .then((res) => {
        res.should.have.status(400); // Adjust status code based on your error response
        res.body.should.have.property('error').eql('Please fill all required fields');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  // Test case for not signing in with non-existing user
  it('should not sign in with non-existing user', (done) => {
    chai.request(app)
      .post('/usersignin')
      .send({
        email: 'nonexisting@example.com',
        password: 'nonexisting123',
      })
      .then((res) => {
        res.should.have.status(400); // Adjust status code based on your error response
        res.body.should.have.property('error').eql('Invalid credentials');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  // Test case for signing in an existing user with correct credentials
  it('should sign in an existing user with correct credentials', (done) => {
    chai.request(app)
      .post('/usersignin')
      .send({
        email: 'test@example.com',
        password: 'test123',
      })
      .then((res) => {
        res.should.have.status(200);
        res.body.should.have.property('msg').eql('Login successful');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
