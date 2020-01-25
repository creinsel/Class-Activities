var reservations=[];
module.exports=function(app){

app.get("/api/rez", function(req, res) {
    return res.json(reservations);
  });
  
  // Displays a single character, or returns false
  app.get("/api/rez/:reservation", function(req, res) {
    var chosen = req.params.reservation;
  
    console.log(chosen);
  
    for (var i = 0; i < reservations.length; i++) {
      if (chosen === reservations[i].routeName) {
        return res.json(reservations[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New Characters - takes in JSON input
  app.post("/api/rez", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    console.log(req);
    var newRes = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newRes);
  
    reservations.push(newRes);
  
    res.json(newRes);
  });
};