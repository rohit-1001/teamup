const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Replace with the path to your app's entry file
const should = chai.should();

chai.use(chaiHttp);

describe('Create Post API', () => {
  // Test case for creating a new post
  it('should create a new post', (done) => {
    chai.request(app)
      .post('/createpost')
      .send({
        email: 'testemail@gmail.com',
        post: {
          title: 'Test Post',
          description: 'Test Description',
          domain: 'Test Domain',
          teamsize: 5,
          details: 'Test Details',
          date: '2023-12-01',
          logo: 'test-logo-url',
        },
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('msg').eql('Post created successfully');
        done();
      });
  });

  // Test case for not creating post with incomplete fields
  it('should not create post with incomplete fields', (done) => {
    chai.request(app)
      .post('/createpost')
      .send({
        email: 'testemail@gmail.com',
        post: {
          // Missing some required fields
          title: 'Incomplete Post',
          teamsize: 3,
        },
      })
      .end((err, res) => {
        res.should.have.status(422); // Adjust status code based on your error response
        res.body.should.have.property('error').eql('All fields need to be filled');
        done();
      });
  });

  // Test case for not creating post with team size not a number
  it('should not create post with team size not a number', (done) => {
    chai.request(app)
      .post('/createpost')
      .send({
        email: 'testemail@gmail.com',
        post: {
          title: 'Invalid Team Size Post',
          description: 'Invalid Team Size Description',
          domain: 'Invalid Team Size Domain',
          teamsize: 'invalid', // Team size should be a number
          details: 'Invalid Team Size Details',
          date: '2023-12-01',
          logo: 'invalid-logo-url',
        },
      })
      .end((err, res) => {
        res.should.have.status(422); // Adjust status code based on your error response
        res.body.should.have.property('error').eql('Team size should be a number');
        done();
      });
  });
});
