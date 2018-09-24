let store = {drivers: []}
class Driver {
  let id = 0;
  constructor(name, id){
    this.name = name;
    this.id = ++id;
  }
}
