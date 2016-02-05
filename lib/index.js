export default class Config {
  constructor(opts = {}) {
    this.components = new Registry(opts.components);
    this.helpers = new Registry(opts.helpers);
    this.filters = new Registry(opts.filters);
  }

  get(type) {
    if (type) return this[type].get();
    return {
      components: this.components.get(),
      helpers: this.helpers.get(),
      filters: this.filters.get() 
    };
  }
}

export class Registry {
  constructor(modules) {
    this.modules = { };
    this.register(modules);
  }

  get(name) { 
    return name ? this.modules[name] : this.modules; 
  }

  register(name, module) {
    if (arguments.length > 1) {
      this.modules[name] = module;
    } else if (arguments.length === 1) {
      for(var n in name) this.register(n, name[n]);
    }

    return this;
  }

  unregister(name) {
    delete this.modules[name];
    return this;
  }
}