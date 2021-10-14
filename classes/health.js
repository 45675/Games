function health() {
  this.HP = 0;
  this.MaxHP= 0;
  this.excess = 0;
  this.tick = function(change) {
    this.HP = this.hp + change;
    this.excess = this.HP - this.MaxHP;
    if (this.excess > 0) {
      this.HP = this.MaxHP;
    };
  };
}
