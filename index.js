let store = {drivers: [], passengers: [], trips: []}
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {

  constructor(name){
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips(){
    let result = store.trips.filter(function (trip) {
      return  trip.driverId === this.id;
      }.bind(this)
    );
  }
}

class Passenger {

  constructor(name){
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }
}

class Trip {

  constructor(driverId, passengerId){
    this.id = ++tripId;
    this.driverId = driverId;
    this.passengerId = passengerId;
    store.trips.push(this);
  }

  // driverId(){
  //   debugger
  //   result = Driver.find((driver) => this.driverId === driver.id);
  //
  //   return result;
  // }

}
