module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    pagefront: {
      app: 'rarwe',
      key: process.env.PAGEFRONT_KEY
    }
  };
  ENV.build.environment = 'production';

  return ENV;
};
