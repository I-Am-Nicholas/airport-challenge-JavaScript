describe("Airport Challenge JS", function(){
  var weather;
  var airport;

  describe("Weather", function() {
    it("is stormy", function() {
      weather = new Weather();
      expect(weather.stormy()).toEqual(true);
    });
  });

  // As an air traffic controller
  // So I can get passengers to a destination
  // I want to instruct a plane to land at an airport and confirm that it has landed
  describe("Airport", function() {
    airport = new Airport();
    plane = new Plane();
    it("instructs a plane to land", function() {
      airport.land(plane);
      expect(airport.planes()).toEqual([plane]);
    });
  });


});
