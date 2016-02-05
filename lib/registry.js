export default class Registry {
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