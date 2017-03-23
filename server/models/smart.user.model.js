const UserModel = require('./user.model');



class SmartUserModel extends UserModel {

  constructor({id, firstName, lastName, description, role, birthYear, url}) {

    super({id, firstName, lastName, description})

    this.role = role;

    this.birthYear = birthYear;

    this.url = url;



  }

  getSmartSentence(){

    return `I am smart an I am ${this.role}. My name is ${this.getName()}`;

  }

  getBirthSentence(){

    return  `${this.getName()} est ne il y a ${this.birthYear}`;

  }

// retourne une phrase qui dit "[Prenom] [Nom] est né il y a [XX] année"

// getRole() // retourne le rôle de la personnalité

// getUrl() // retourne l'url de la page de la personnalité

}



module.exports = SmartUserModel;
