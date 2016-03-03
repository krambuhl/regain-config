# rogain-config

Use to configure module required by rogain templating tools.

## Config

The Config class creates a set of `Registry` instances for managing the __components__ and __filters__ that are used by Rogain tools.

```js
// create a config 
var config = new Config();

// register modules to config registers
config.components.register({
    Button: require('./components/Button.json'),
    Form: require('./components/Form.json')
});

config.filters.register('uppercase', require('./filters/uppercase'));
```

### get(type)

Returns a plain object representing the Config instance.  Optional type argument can be passed to get a specific config registry.

```js
config.get() // => { components: { }, filters: { } }
config.get('components') // => { Button: { ... }, Form: { ... } }
```

### registerComponent(name, component)

Registers component. Sugar for `config.components.register`.

### unregisterComponent(name)

Unregisters component. Sugar for `config.components.unregister`.

### registerFilter(name, filter)

Registers filter. Sugar for `config.filters.register`.

### unregisterFilter(name)

Unregisters filter. Sugar for `config.filters.unregister`.
