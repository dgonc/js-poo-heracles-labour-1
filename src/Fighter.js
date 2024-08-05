/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
  constructor(name, strenght, dexterity) {
    this.name = name;
    this.strenght = strenght;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }
}

module.exports = Fighter;
