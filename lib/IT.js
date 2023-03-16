const Employee = require("./Employee");

class IT extends Employee {
  constructor (name, id, email, school){
      super(name, id, email)
      this.school = school
  }
  getRole(){
    return 'IT'
}
getSchool () {
    return this.school
}

}

module.exports = IT;
