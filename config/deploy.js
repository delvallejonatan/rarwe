module.exports = function(deployTarget) {
  var ENV = {
    build: {},
  };
  ENV.build.environment = 'production';

  return ENV;
};
