class Car {
  constructor(carDetails) {
    this.#brand = carDetails.brand
    this.#model = carDetails.model
    this.speed = carDetails.speed
    this.isTrunkOpen = carDetails.isTrunkOpen
  }

  trunkStatus() {
    if (this.isTrunkOpen === true) {
      return "open"
    } else if (this.isTrunkOpen === false) {
      return "closed"
    }
  }

  displayInfo() {
    console.log(`${this.#brand} ${this.#model}, speed: ${this.speed} km/h, trunk: ${this.trunkStatus()}`);
  }

  go() {
    if (!this.isTrunkOpen) {
      this.speed += 5;
    }

    if (this.speed > 200) {
      this.speed = 200;
    }
  }

  brake() {
    this.speed -= 5
    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  openTrunk() {
    if (this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  #brand;
  #model;
  speed;
  isTrunkOpen;
}

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla',
  speed: 0,
  isTrunkOpen: true
});
const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3',
  speed: 0,
  isTrunkOpen: false
});

console.log(car1);
console.log(car2);

car1.displayInfo()
car1.go();
car1.go();
car1.brake();
car1.displayInfo();

car1.closeTrunk();
car1.displayInfo();

car2.displayInfo();
car2.brake();
car2.go();
car2.brake();
car2.displayInfo();

car2.openTrunk();
car2.displayInfo();

class RaceCar extends Car {

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    this.speed += this.acceleration;

    if (this.speed > 300) {
      this.speed = 300;
    }
  }

  openTrunk() {
    console.log('Race cars do not have a trunk.');
  }

  closeTrunk() {
    console.log('Race cars do not have a trunk.');
  }


  acceleration;
}

const raceCar = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20,
  speed: 0,
  isTrunkOpen: ''
})

raceCar.go();
raceCar.go();
raceCar.displayInfo();
raceCar.brake();
raceCar.displayInfo();
raceCar.openTrunk();
raceCar.displayInfo();