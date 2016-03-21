var test = require('tape');

var Config = require('../dist');
var Registry = require('rogain-registry');

var component1 = { type: 'tag', tagName: 'br' };
function transform1(data) { return data; }
function filter1(data) { return data; }


test('new Config()', function (t) {
  var config = new Config();

  t.plan(3);
  t.equal(config instanceof Config, true);
  t.equal(config.components instanceof Registry, true);
  t.equal(config.transforms instanceof Registry, true);
});

test('new Config({ components, transforms })', function (t) {
  var config = new Config({
    components: { C1: component1 },
    transforms: { t1: transform1 }
  });

  t.plan(2);
  t.equal(config.components.get().C1, component1);
  t.equal(config.transforms.get().t1, transform1);
});


test('new Config({ }, [])', function (t) {
  var config = new Config({
    components: { C1: component1 },
    transforms: { t1: transform1 }
  }, [
    'components',
    'transforms',
    'filters'
  ]);

  config.filters.register('f1', filter1);

  t.plan(3);
  t.equal(config.components.get().C1, component1);
  t.equal(config.transforms.get().t1, transform1);
  t.equal(config.filters.get().f1, filter1);
});

test('config.get()', function (t) {
  var config = new Config();
  var parts = config.get();

  t.plan(2);
  t.equal(Object.keys(parts.components).length, 0);
  t.equal(Object.keys(parts.transforms).length, 0);
});

test('config.get(type)', function (t) {
  var config = new Config({
    components: { C1: component1 },
    transforms: { t1: transform1 }
  });

  t.plan(2);
  t.equal(config.get('components').C1, component1);
  t.equal(config.get('transforms').t1, transform1);
});