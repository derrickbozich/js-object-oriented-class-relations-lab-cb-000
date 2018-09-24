let store = {drivers: []}
let driverId = 0;
class Driver {

  constructor(name, id){
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }
}
