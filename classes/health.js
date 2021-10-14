function health() {
  this.HP = 100;
  this.MaxHP = 100;
  this.HPRegen = .01;
  this.excess = 0;
  this.tick = function(change) {
    this.HP += this.HPRegen;
    this.HP += change
    if (this.HP > this.MaxHP) {
      this.excess = this.HP - this.MaxHP;
      this.HP -= this.excess;
    };
  };
}
