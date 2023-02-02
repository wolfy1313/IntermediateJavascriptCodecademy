class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._numberOfStudents = numberOfStudents;
    this._level = level;
  }
  get name(){
    return this._name
  }
  get numberOfStudents(){
    return this._numberOfStudents
  }
  get level() {
    return this._level
  }
  set numberOfStudents(num){
    if (typeof this.numberOfStudents === 'number') { this._numberOfStudents = num
  } else {
    console.log("Invalid input: numberOfStudents must be set to a Number.")
    }
  }

  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  }

  static pickSubstituteTeacher(substituteTeachers){
    const randNum = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randNum]
  }
}


class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickUpPolicy){
    super(name, numberOfStudents, 'primary');
    // this._level = 'primary'
    this._pickUpPolicy = pickUpPolicy
  }
}
class MiddleSchool extends School {
  constructor(name, numberOfStudents, level){
    super(name, numberOfStudents);
    this._level = 'middle'
  }
}
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._level = 'high'
    this._sportsTeams = sportsTeams
  }
  get sportsTeams() {
    console.log(this._sportsTeams)
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts()

console.log(PrimarySchool.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobili']))

const alSmith = new HighSchool ('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and '])
alSmith.sportsTeams