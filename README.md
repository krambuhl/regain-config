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

## Registry

The Registry class creates a dictonary for managing modules.

```js
var components = new Registry()

components.register('If', require('./components/helpers/If'));
components.register('Heading', require('./components/Heading'));

components.unregister('If');
```

### get(name)

gets selected registry data. passing a name will return the matching module or undefined if not found. If called with no arguments `get` will return all modules as a plain object.

```js
components.get('If') // => module
components.get() // => { name: module }
```

### register(name, module)

```js
components.register('Repeat', require('./components/helpers/Repeat'));
```

### register(modules)

```js
components.register({
    Pass: require('./components/helpers/Pass'),
    Fail: require('./components/helpers/Fail')
})
```

### unregister(name)

```js
components.unregister('Repeat');
```


## Install 

With [npm](https://www.npmjs.com) do:

```
npm install rogain-config
```

## License

MIT