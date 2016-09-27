/* global chai */

import helloWord from '../src/index';

const expect = chai.expect;

describe( 'helloWord', () => {
  it( 'it is a function', () => {
    expect( helloWord ).to.be.a( 'function' );
  } );
  
  it( 'return "Hello Word!', () => {
    const result = helloWord();
    expect( result ).to.equal( 'Hello Word!' );
  } );
} );
