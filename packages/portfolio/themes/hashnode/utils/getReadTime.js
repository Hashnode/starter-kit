module.exports = function getReadTime(string) {
    const wordsPerMinute = 225; // Average case.
    const numberOfWords =
      string
        .trim()
        .replace(/(\r\n|\n|\r)/gm, ' ')
        .split(' ')
        .filter((word) => word !== '').length || 0;
    if (numberOfWords > 0) {
      return Math.ceil(numberOfWords / wordsPerMinute);
    }
    return 0;
  };
  