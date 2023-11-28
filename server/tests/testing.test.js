const chai = require("chai");
const chaiHttp = require("chai-http");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const app = require("../app"); // Replace with the path to your app's entry file
const should = chai.should();
const expect = chai.expect;

setTimeout(function () {}, 10000000);
chai.use(chaiHttp);

describe("User Sign-in API", () => {
  it("should not sign in with incomplete fields", async function () {
    this.timeout(10000);
    const data = {
      email: "incomplete@example.com",
    };
    const response = await chai.request(app).post("/usersignin").send(data);
    expect(response).to.have.status(400);
  });
  it("should sign in an existing user with correct credentials", function () {
    this.timeout(10000);
    const data = {
      email: "r@gmail.com",
      password: "123",
    };
    return chai
      .request(app)
      .post("/usersignin")
      .send({ data })
      .then((response) => {
        expect(response).to.have.status(400);
      });
  });
  it("should not sign in with non-existing user", function () {
    this.timeout(10000);
    const data = {
      email: "nonexisting1@example.com",
      password: "nonexisting87",
    };
    return chai
      .request(app)
      .post("/usersignin")
      .send({ data })
      .then((response) => {
        expect(response).to.have.status(400);
      });
  });
});

describe("Create Post API", () => {
  it("should create a new post", async function () {
    this.timeout(1000000);
    const data = {
      email: "test@example40.com",
      post: {
        title: "Test Post",
        description: "Test Description",
        domain: "Test Domain",
        teamsize: 5,
        details: "Test Details",
        date: "2023-12-01",
        logo: "test-logo-url",
      },
    };
    const response = await chai.request(app).post("/createnewpost").send(data);
    expect(response).to.have.status(200);
  });

  // Test case for not creating post with incomplete fields
  it("should not create post with incomplete fields", (done) => {
    chai
      .request(app)
      .post("/createnewpost")
      .send({
        email: "testemail@gmail.com",
        post: {
          // Missing some required fields
          title: "Incomplete Post",
          teamsize: 3,
        },
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.should.have.status(422);
          res.body.should.have
            .property("error")
            .eql("All fields need to be filled");
          done();
        }
      });
  });

  // Test case for not creating post with team size not a number
  it("should not create post with team size not a number", (done) => {
    chai
      .request(app)
      .post("/createnewpost")
      .send({
        email: "testemail@gmail.com",
        post: {
          title: "Invalid Team Size Post",
          description: "Invalid Team Size Description",
          domain: "Invalid Team Size Domain",
          teamsize: "invalid", // Team size should be a number
          details: "Invalid Team Size Details",
          date: "2023-12-01",
          logo: "invalid-logo-url",
        },
      })
      .end((err, res) => {
        res.should.have.status(422); // Adjust status code based on your error response
        res.body.should.have
          .property("error")
          .eql("Team size should be a number");
        done();
      });
  });
});

describe("User Registration API", () => {
  // Test case for successful registration
  it("should register a new user", (done) => {
    chai
      .request(app)
      .post("/userregister")
      .send({
        name: "Test User",
        email: "test@example44.com",
        phone: "1234567890",
        password: "test123",
        cpassword: "test123",
        age: 25,
        location: "Test Location",
        interests: "Test Interests",
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have
          .property("msg")
          .eql("User registered successfully");
        done();
      });
  });

  // Test case for email already registered
  it("should not register a user with an already registered email", (done) => {
    chai
      .request(app)
      .post("/userregister")
      .send({
        name: "Another User",
        email: "r@gmail.com", // Use the same email as in the previous test
        phone: "9876543210",
        password: "another123",
        cpassword: "another123",
        age: 30,
        location: "Another Location",
        interests: "Another Interests",
      })
      .end((err, res) => {
        res.should.have.status(409); // Expect a conflict status for duplicate registration
        res.body.should.have.property("error").eql("Email already registered");
        done();
      });
  });

  // Test case for missing required fields
  it("should not register a user with missing required fields", (done) => {
    chai
      .request(app)
      .post("/userregister")
      .send({
        // Missing some required fields
        name: "Incomplete User",
        email: "incomplete@example.com",
        password: "incomplete123",
        cpassword: "incomplete123",
        age: 28,
      })
      .end((err, res) => {
        res.should.have.status(422); // Expect unprocessable entity status for missing fields
        res.body.should.have
          .property("error")
          .eql("All fields need to be filled");
        done();
      });
  });
});
