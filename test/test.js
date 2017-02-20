import assert from 'assert';
import trailingSlashIt from '..';
import {
  trailingSlashIt as tsi,
  unTrailingSlashIt as utsi,
} from '..';

describe('trailingSlashIt as default export', function() {
  describe('add a slash', function() {
    it('should add a slash to a string', function() {
      assert.equal('foo/', trailingSlashIt('foo'))
    });

    it('should remove a single trailing slash before adding one', function() {
      assert.equal('foo/', trailingSlashIt('foo/'));
    });

    it('should remove two trailing slashes before adding one', function() {
      assert.equal('foo/', trailingSlashIt('foo//'));
    });

    it('should remove several trailing slashes before adding one', function() {
      assert.equal('foo/', trailingSlashIt('foo///'));
    });
  });
});

describe('trailingSlashIt as non-default export', function() {
  describe('add a slash', function() {
    it('should add a slash to a string', function() {
      assert.equal('foo/', tsi('foo'))
    });

    it('should remove a single trailing slash before adding one', function() {
      assert.equal('foo/', tsi('foo/'));
    });

    it('should remove two trailing slashes before adding one', function() {
      assert.equal('foo/', tsi('foo//'));
    });

    it('should remove several trailing slashes before adding one', function() {
      assert.equal('foo/', tsi('foo///'));
    });
  });
});

describe('unTrailingSlashIt as non-default export', function() {
  describe('remove a slash', function() {
    it('should not do anything with a string that does not end with a slash', function() {
      assert.equal('foo', utsi('foo'))
    });

    it('should remove a single trailing slash', function() {
      assert.equal('foo', utsi('foo/'));
    });

    it('should remove two trailing slashes', function() {
      assert.equal('foo', utsi('foo//'));
    });

    it('should remove several trailing slashes', function() {
      assert.equal('foo', utsi('foo///'));
    });
  });
});
