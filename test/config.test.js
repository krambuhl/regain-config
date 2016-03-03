var test = require('tape');

var Config = require('../dist');
var Registry = require('rogain-registry');

var component1 = { type: 'tag', tagName: 'br' };
function filter1(data) { return data; }


test('new Config()', function (t) {
  var config = new Config();

  t.plan(3);
  t.equal(config instanceof Config, true);
  t.equal(config.components instanceof Registry, true);
  t.equal(config.filters instanceof Registry, true);
});

test('new Config({ components, filters })', function (t) {
  var config = new Config({
    components: { C1: component1 },
    filters: { f1: filter1 }
  });

  t.plan(2);
  t.equal(config.components.get().C1, component1);
  t.equal(config.filters.get().f1, filter1);
});

test('config.get()', function (t) {
  var config = new Config();
  var parts = config.get();

  t.plan(2);
  t.equal(Object.keys(parts.components).length, 0);
  t.equal(Object.keys(parts.filters).length, 0);
});

test('config.get(type)', function (t) {
  var config = new Config({
    components: { C1: component1 },
    filters: { f1: filter1 }
  });

  t.plan(2);
  t.equal(config.get('components').C1, component1);
  t.equal(config.get('filters').f1, filter1);
});

test('registerComponent() / unregisterComponent', function (t) {
  var config = new Config();
  
  t.plan(2);

  config.registerComponent('C1', component1);
  t.equal(config.get('components').C1, component1);
  
  config.unregisterComponent('C1');
  t.equal(config.get('components').C1 === undefined, true);
});

test('registerFilter() / unregisterFilter()', function (t) {
  var config = new Config();

  t.plan(2);
  
  config.registerFilter('F1', filter1);
  t.equal(config.get('filters').F1, filter1);
  
  config.unregisterFilter('F1');
  t.equal(config.get('filters').F1 === undefined, true);
});