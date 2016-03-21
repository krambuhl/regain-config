import Registry from 'rogain-registry';

export default class Config {
  constructor(regs = {}, names = ['components', 'transforms']) {
    this.registries = names;
    names.forEach(name => this[name] = new Registry(regs[name]), this);
  }

  get(type) {
    if (type) return this[type].get();
    return this.registries.reduce((obj, name) => {
      obj[name] = this[name].get();
      return obj;
    }, {});
  }
}