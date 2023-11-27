const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Replace with the path to your app's entry file
const should = chai.should();

chai.use(chaiHttp);

describe('User Registration API', () => {
  // Test case for successful registration
  it('should register a new user', (done) => {
    chai.request(app)
      .post('/userregister')
      .send({
        name: 'Test User',
        email: 'test@example100.com',
        phone: '1234567890',
        password: 'test123',
        cpassword: 'test123',
        age: 25,
        location: 'Test Location',
        interests: 'Test Interests',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('msg').eql('User registered successfully');
        done();
      });
  });

  // Test case for email already registered
  it('should not register a user with an already registered email', (done) => {
    chai.request(app)
      .post('/userregister')
      .send({
        name: 'Another User',
        email: 'test@example123.com', // Use the same email as in the previous test
        phone: '9876543210',
        password: 'another123',
        cpassword: 'another123',
        age: 30,
        location: 'Another Location',
        interests: 'Another Interests',
      })
      .end((err, res) => {
        res.should.have.status(409); // Expect a conflict status for duplicate registration
        res.body.should.have.property('error').eql('Email already registered');
        done();
      });
  });

  // Test case for missing required fields
  it('should not register a user with missing required fields', (done) => {
    chai.request(app)
      .post('/userregister')
      .send({
        // Missing some required fields
        name: 'Incomplete User',
        email: 'incomplete@example.com',
        password: 'incomplete123',
        cpassword: 'incomplete123',
        age: 28,
      })
      .end((err, res) => {
        res.should.have.status(422); // Expect unprocessable entity status for missing fields
        res.body.should.have.property('error').eql('All fields need to be filled');
        done();
      });
  });
});

