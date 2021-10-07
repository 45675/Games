view = function() {
  this.update = function() {
    this.updatelevel();
  }
  this.updatelevel = function() {
    document.getElementById('level').innerHTML = intToString(main.level);
    document.getElementById('xp').innerHTML = intToString(main.xp);
    document.getElementById('xpneeded').innerHTML = intToString(main.xpneeded);
  }
}
