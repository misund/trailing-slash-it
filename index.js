/**
 * Removes trailing forward slashes if they exist.
 *
 * If the string doesn't end with a slash, we simply return it.
 */
const unTrailingSlashIt = (str) => {
  if (str.endsWith('/')) {
    return unTrailingSlashIt(str.slice(0, -1));
  }

  return str;
};

/**
 * Appends a trailing slash.
 *
 * Will remove a trailing forward slash if it exists already, before adding a
 * trailing forward slash. This prevents double slashing a string or path.
 */
const trailingSlashIt = (str) => {
  return unTrailingSlashIt(str) + '/';
};

exports = module.exports = trailingSlashIt;
exports.trailingSlashIt = trailingSlashIt;
exports.untrailingSlashIt = unTrailingSlashIt;
