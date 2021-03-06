const watch = require('watch');

module.exports = {
  watch(assembler) {
    watch.watchTree('./src', {
      filter: function (f) {
        const pathParts = f.split('[\\/]');
        const fileName = pathParts[pathParts.length - 1];
        return /\.html$/.test(f) || !/\./.test(fileName);
      }
    }, function (f, curr, prev) {
      if (typeof f == "object" && prev === null && curr === null) {
        console.log('Watching templates.');
      } else {
        console.log(`${f} has changed.`);
        assembler();
      }
    });
  }
};
