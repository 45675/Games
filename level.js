function levels() {
  this.level = 1;
  this.xp = 0;
  this.xpneeded = 0;
  this.xpps = .01
  this.tick = function(){
    this.xp += this.xpps
  }
}
