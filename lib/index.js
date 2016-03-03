import Registry from 'rogain-registry';

export default class Config {
  constructor(opts = {}) {
    this.components = new Registry(opts.components);
    this.filters = new Registry(opts.filters);
  }

  get(type) {
    if (type) return this[type].get();
    return {
      components: this.components.get(),
      filters: this.filters.get() 
    };
  }

  registerComponent() { this.components.register(...arguments); }
  unregisterComponent() { this.components.unregister(...arguments); }
  
  registerFilter() { this.filters.register(...arguments); }
  unregisterFilter() { this.filters.unregister(...arguments); }
}