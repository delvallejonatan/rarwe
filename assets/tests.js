'use strict';

define('rarwe/tests/acceptance/bands-test', ['exports', 'ember', 'qunit', 'rarwe-demo/tests/helpers/module-for-acceptance'], function (exports, _ember, _qunit, _rarweDemoTestsHelpersModuleForAcceptance) {

  (0, _rarweDemoTestsHelpersModuleForAcceptance['default'])('Acceptance | Bands', {
    beforeEach: function beforeEach() {
      server.create('band', { name: 'Tool' });
      server.create('band', { name: 'Pearl Jam' });
    }
  });

  (0, _qunit.test)('List bands', function (assert) {
    visit('/bands');
    percySnapshot('list-bands');

    andThen(function () {
      assert.equal(_ember['default'].$('.band-link').length, 2, "All bands have a corresponding link");
      assert.equal(_ember['default'].$('.band-link:contains("Tool")').length, 1, "Tool is displayed");
      assert.ok(_ember['default'].$('.band-link:contains("Pearl Jam")').length, 1, "Pearl Jam is displayed");
    });
  });
});
define('rarwe/tests/acceptance/bands-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/bands-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/bands-test.js should pass jshint.');
  });
});
define('rarwe/tests/acceptance/songs-test', ['exports', 'ember', 'qunit', 'rarwe-demo/tests/helpers/module-for-acceptance'], function (exports, _ember, _qunit, _rarweDemoTestsHelpersModuleForAcceptance) {

  (0, _rarweDemoTestsHelpersModuleForAcceptance['default'])('Acceptance | Songs', {
    beforeEach: function beforeEach() {
      var tool = server.create('band', {
        id: 1,
        name: 'Tool'
      });
      server.create('band', {
        id: 2,
        name: 'Pearl Jam'
      });

      server.create('song', { title: '46 & 2', bandId: tool.id });
      server.create('song', { title: 'Lateralus', bandId: tool.id });
      server.create('song', { title: 'Parabola', bandId: tool.id });
    }
  });

  (0, _qunit.test)('List songs for a band', function (assert) {
    server.logging = true;
    visit('/bands');
    click('a:contains("Tool")');
    percySnapshot('list-songs-for-band');

    andThen(function () {
      assert.equal(_ember['default'].$('.song').length, 3, "All songs for the selected band are displayed");
      assert.equal(_ember['default'].$('.song:contains("46 & 2")').length, 1, "The first song is displayed");
    });
  });
});
define('rarwe/tests/acceptance/songs-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/songs-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/songs-test.js should pass jshint.');
  });
});
define('rarwe/tests/adapters/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('rarwe/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('rarwe/tests/components/star-rating.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/star-rating.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/star-rating.js should pass jshint.');
  });
});
define('rarwe/tests/controllers/bands.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/bands.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/bands.js should pass jshint.');
  });
});
define('rarwe/tests/controllers/bands/band/details.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/bands/band/details.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/bands/band/details.js should pass jshint.');
  });
});
define('rarwe/tests/controllers/bands/band/songs.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/bands/band/songs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/bands/band/songs.js should pass jshint.');
  });
});
define('rarwe/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
    server.shutdown();
  }
});
define('rarwe/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('rarwe/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'rarwe/tests/helpers/start-app', 'rarwe/tests/helpers/destroy-app', 'rarwe/tests/helpers/percy/register-helpers'], function (exports, _qunit, _ember, _rarweTestsHelpersStartApp, _rarweTestsHelpersDestroyApp, _rarweTestsHelpersPercyRegisterHelpers) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _rarweTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _rarweTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('rarwe/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('rarwe/tests/helpers/resolver', ['exports', 'rarwe/resolver', 'rarwe/config/environment'], function (exports, _rarweResolver, _rarweConfigEnvironment) {

  var resolver = _rarweResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _rarweConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _rarweConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('rarwe/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('rarwe/tests/helpers/start-app', ['exports', 'ember', 'rarwe/app', 'rarwe/config/environment'], function (exports, _ember, _rarweApp, _rarweConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _rarweConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _rarweApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('rarwe/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('rarwe/tests/models/band.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/band.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/band.js should pass jshint.');
  });
});
define('rarwe/tests/models/song.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/song.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/song.js should pass jshint.');
  });
});
define('rarwe/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('rarwe/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('rarwe/tests/routes/bands.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/bands.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bands.js should pass jshint.');
  });
});
define('rarwe/tests/routes/bands/band.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/bands/band.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bands/band.js should pass jshint.');
  });
});
define('rarwe/tests/routes/bands/band/details.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/bands/band/details.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bands/band/details.js should pass jshint.');
  });
});
define('rarwe/tests/routes/bands/band/songs.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/bands/band/songs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bands/band/songs.js should pass jshint.');
  });
});
define('rarwe/tests/routes/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('rarwe/tests/test-helper', ['exports', 'rarwe/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (exports, _rarweTestsHelpersResolver, _emberQunit, _emberCliQunit) {

  (0, _emberQunit.setResolver)(_rarweTestsHelpersResolver['default']);
  (0, _emberCliQunit.start)();
});
define('rarwe/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('rarwe/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
