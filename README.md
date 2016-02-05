# Rogain Config

The Config class creates a set of `Registry` instances for managing the __components__, __helpers__, and __filters__ that are used by Rogain tools.

```js
// create a config 
var config = new Config();

// register modules to config registers
config.components.register({
    Button: require('./components/Button.json'),
    Form: require('./components/Form.json')
});
config.helpers.register('If', require('./helpers/If'));
config.filters.register('uppercase', require('./filters/uppercase'));
```


# Registry

The Registry class creates a dictonary for managing modules.

```js
var helpers = new Registry()
helpers.register('If', require('./helpers/If'));
helpers.unregister('If');
```

### get([name])

gets selected registry data. passing a name will return the matching module or undefined if not found. If called with no arguments get will return all modules in object format.

```js
helpers.get('If') // => module
helpers.get() // => { name: module }
```

### register(name, module)

```js
helpers.register('Repeat', require('./helpers/Repeat'));
```

### register(modules)

```js
helpers.register({
    Pass: require('./helpers/pass'),
    Fail: require('./helpers/fail'),
})
```

### unregister(name)

```js
helpers.unregister('Repeat');
```
