"use strict";

const { Given, When, Then } = require("cucumber")
const assert = require("assert")

const request = require("supertest");
const app = require(process.cwd() + "/server/app").app;

/*
 * Steps for RestEndpoint feature
 */

Given('the starter-service', function () {

});

When('I GET the endpoint {string}', function (path) {
  this.request = request(app).get(path);
});

When('I POST the endpoint {string}', function (string) {
  this.request = request(app).post(path);
});

Then('I should get a {int} with a body of', function (status, body, done) {
  this.request.expect(status).expect(body).end(done);
});

Then('I should get the message', function (message) {
  if (this.response + "" !== message) {
    console.log("EXPECTED", message)
    console.log("ACTUAL", this.response + "")
  }
  assert(this.response + "" == message);
});