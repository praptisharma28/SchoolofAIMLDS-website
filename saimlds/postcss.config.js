module.exports = {
    plugins: [
      require('autoprefixer')({
        // Browsers you want to support
        overrideBrowserslist: ['> 1%', 'last 2 versions', 'not dead']
      })
    ]
  };
  