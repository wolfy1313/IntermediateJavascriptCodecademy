class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  static generatePassword(){
    const password = Math.floor(Math.random()*10000);
    return password
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._insurance = insurance;
  }

  get insurance(){
    return this._insurance;
  }
  addInsurance(newInsurance){
    this.insurance.push(newInsurance)
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
const doctorWho = new Doctor('Whom', ['Signa', 'Ascension'])
doctorWho.addInsurance('RobotProof')
console.log(doctorWho.insurance)
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);
console.log(HospitalEmployee.generatePassword());