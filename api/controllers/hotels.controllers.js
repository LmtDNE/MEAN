var hotelData = require('../data/hotel-data.json');

module.exports.getAllHotels = function(req, res) {
   console.log("GET the hotels")
   console.log("This is the query", req.query);

   var offset = 0;
   var count = 5;

   if(req.query && req.query.offset) {
      offset = parseInt(req.query.offset, 10);
   }
   if(req.query && req.query.count) {
      count = parseInt(req.query.count, 10);
   }
   //Takes the hotelData array slices it starting from the offset through the count endpoint
   var returnData =  hotelData.slice(offset, offset + count);

    res.status(200).json({returnData})
}

module.exports.getOneHotel = function(req, res) {
  var hotelId = req.params.hotelId;
  var thisHotel = hotelData[hotelId];
   console.log("GET hotel ID", hotelId);
    res.status(200).json(thisHotel)
}

module.exports.addOneHotel = function(req, res) {
   console.log("POST new hotel");
   console.log(req.body);

    res.status(200).json(req.body);
}