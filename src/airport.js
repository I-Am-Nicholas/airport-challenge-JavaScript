var Airport = function() {
  this.hangar = [];
};
Airport.prototype.planes = function(){return this.hangar};

Airport.prototype.land = function(plane){
  this.hangar.push(plane);
};
