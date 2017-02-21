import assert from 'assert';
import trailingSlashIt from '..';
import {
  trailingSlashIt as tsi,
  unTrailingSlashIt as utsi,
} from '..';

describe('trailingSlashIt as default export', function() {
  describe('naked string', function() {
    it('should add a slash to a string', function() {
      assert.equal('foo/', trailingSlashIt('foo'))
    });
  });

  describe('forward slashes', function() {
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

  describe('backslashes', function() {
    it('should remove a single trailing backslash before adding a forward slash', function() {
      assert.equal('foo/', trailingSlashIt('foo\\'));
    });

    it('should remove two trailing backslashes before adding a forward slash', function() {
      assert.equal('foo/', trailingSlashIt('foo\\\\'));
    });

    it('should remove alternating trailing forward and backslashes before adding a forward slash', function() {
      assert.equal('foo/', trailingSlashIt('foo\\/\\//'));
    });
  });
});

describe('trailingSlashIt as non-default export', function() {
  describe('naked string', function() {
    it('should add a slash to a string', function() {
      assert.equal('foo/', trailingSlashIt('foo'))
    });
  });

  describe('forward slashes', function() {
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

  describe('backslashes', function() {
    it('should remove a single trailing backslash before adding a forward slash', function() {
      assert.equal('foo/', trailingSlashIt('foo\\'));
    });

    it('should remove two trailing backslashes before adding a forward slash', function() {
      assert.equal('foo/', trailingSlashIt('foo\\\\'));
    });

    it('should remove alternating trailing forward and backslashes before adding a forward slash', function() {
      assert.equal('foo/', trailingSlashIt('foo\\/\\//'));
    });
  });
});

describe('unTrailingSlashIt as non-default export', function() {
  describe('naked string', function() {
    it('should not do anything with a string that does not end with a slash', function() {
      assert.equal('foo', utsi('foo'))
    });
  });

  describe('forward slashes', function() {
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

  describe('backslashes', function() {
    it('should remove a single trailing backslash', function() {
      assert.equal('foo', utsi('foo\\'));
    });

    it('should remove two trailing backslashes', function() {
      assert.equal('foo', utsi('foo\\'));
    });

    it('should remove alternating trailing forward and backslashes', function() {
      assert.equal('foo', utsi('foo\\/\\/'));
    });
  });
});
