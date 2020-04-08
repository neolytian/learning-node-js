const assert = require('chai').assert;
const expect = require('chai').expect;

import pool from '../../../app/db/dev/pool'

describe('check if connection pool is ready', () => {
  it('check the pool object for its characteristics', () => {
    expect(pool).to.be.a("object");
  });
});