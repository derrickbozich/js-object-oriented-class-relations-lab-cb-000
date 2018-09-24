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
    return store.trips.filter((trip) => trip.driver.id === this.id);
  }

  passengers(){
    let passengers = []
    this.trips().forEach((trip) => passengers.push(trip.passenger));
    return passengers;
    // return store.trip.filter((trip) => trip.driver.id === this.id)
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

  constructor(driver, passenger){
    this.id = ++tripId;
    this.driver = driver;
    this.passenger = passenger;
    store.trips.push(this);
  }

  // driverId(){
  //   debugger
  //   result = Driver.find((driver) => this.driverId === driver.id);
  //
  //   return result;
  // }

}
