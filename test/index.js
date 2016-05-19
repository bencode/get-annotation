'use strict';


const fs = require('fs');
const pathUtil = require('path');

const get = require('..');


describe('get-annotation', function() {
  it('get annotation', function() {
    const body = fixture('t2.js');
    get(body, 'entry').should.be.true();
    get(body, 'path').should.equal('/a/b-c/hello');
    get(body, 'lessbuild').should.be.false();
    get(body, 'ignore').should.be.true();
    get(body, 'webpack.entry').should.be.true();
    get(body, 'server.url').should.equal('http://www.google.com');
    get(body, 'count').should.equal(1234);
    get(body, 'price').should.equal(12.34);

    // once more
    get(body, 'path').should.be.equal('/a/b-c/hello');
  });


  it('must be first block comment', function() {
    const body = fixture('t2.js');
    (get(body, 'preventBuild') === null).should.be.true();
  });


  it('should work with no comment', function() {
    const body = fixture('t3.less');
    (get(body, 'entry') === null).should.be.true();
  });
});


function fixture(file) {
  const path = pathUtil.join(__dirname, 'fixtures', file);
  return fs.readFileSync(path, 'utf-8');
}



