class Car {
  brand;
  model;
  speed = 0;
  isTrunkOpen;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h, is trunk opened? ${this.isTrunkOpen}`);
  }

  go() {
    this.speed += 5;
    if (this.speed > 200) {
      this.speed = 200;
    }
    if (this.isTrunkOpen === false) {
      this.speed = 0;
    }
  }

  break() {
    this.speed -= 5;
    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  openTrunk() {
    this.isTrunkOpen = true;
    if (this.speed > 0) {
      this.isTrunkOpen = false;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});

const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3'
});

console.log(car1);
console.log(car2);

car1.displayInfo();
car2.displayInfo();
car1.go();
car1.go();
car1.go();
car1.go();
car1.break();
car1.displayInfo();
car1.openTrunk();
car1.displayInfo();
car1.break();
car1.break();
car1.break();
car1.displayInfo();
car1.openTrunk();
car1.displayInfo();
car1.go();