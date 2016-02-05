var test = require('tape');

var Config = require('../dist');
var Registry = require('../dist/registry');

function helper1(tree, props) { return tree; }
function helper2(tree, props) { return tree; }

test('new Registry()', function(t) {
  var registry = new Registry();
  t.plan(1);
  t.equal(registry instanceof Registry, true);
});

test('new Registry(modules)', function(t) {
  var registry = new Registry({
    H1: helper1,
    H2: helper2
  });

  t.plan(2);
  t.equal(registry.modules.H1, helper1);
  t.equal(registry.modules.H2, helper2);
});

test('registry.get()', function(t) {
  var registry = new Registry({
    H1: helper1,
    H2: helper2
  });

  t.plan(1);
  t.equal(Object.keys(registry.get()).length, 2);
});

test('registry.get(name)', function(t) {
  var registry = new Registry({
    H1: helper1,
    H2: helper2
  });
  var res = registry.get('H1');

  t.plan(2);
  t.equal(typeof res === 'function', true);
  t.equal(res, helper1);
});

test('registry.register(name, module)', function(t) {
  var reg = new Registry();
  reg.register('H1', helper1);
  t.plan(1);
  t.equal(reg.get('H1'), helper1);
});

test('registry.register(modules)', function(t) {
  var reg = new Registry();
  reg.register({ H1: helper1, H2: helper2 });
  
  t.plan(2);
  t.equal(reg.get('H1'), helper1);
  t.equal(reg.get('H2'), helper2);
});

test('registry.unregister(name)', function(t) {
  t.plan(2);

  var reg = new Registry();
  reg.register({ H1: helper1, H2: helper2 });
  reg.unregister('H2');
  t.equal(reg.get('H1'), helper1);
  t.equal(reg.get('H2') === undefined, true);
});