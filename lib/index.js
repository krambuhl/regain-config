import Registry from './registry';

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