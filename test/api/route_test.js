'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);

require('../../server');

describe('MeanMedianMode', function() {

  it('route gets accurate mean median and mode', function(done) {
    chai.request('http://localhost:5000')
    .post('/mmm')
    .send({nums: '5,5,6,6,7'})
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body).to.have.property('mean');
      expect(res.body).to.have.property('median');
      expect(res.body).to.have.property('mode');
      expect(res.body.mean).to.eql(5.8);
      expect(res.body.median).to.eql(6);
      expect(res.body.mode).to.eql([5, 6]);
      done();
    });
  });
});
