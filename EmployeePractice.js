class Employee {
  constructor(name, hourlyWage){
    this._name = name;
    this._hourlyWage = hourlyWage;
    this._hoursWorked = 0;
  }
  get name(){
    return this._name
  }
  get hourlyWage(){
    return this._hourlyWage;
  }
  get hoursWorked(){
    return this._hoursWorked
  }

  // set hoursWorked(hours){
  //   return this._hoursWorked += hours
  // }
  logHours(hours) {
    return this._hoursWorked += hours
  }
  generatePaycheck(){
    console.log(this.hoursWorked * this.hourlyWage)
    return this.hoursWorked === 0
  }
}

const alex = new Employee('Alex', 15)

alex.logHours(10)
console.log(alex.hoursWorked)
alex.generatePaycheck()