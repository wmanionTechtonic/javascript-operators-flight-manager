"use strict"

function Prices() {
  function calculateFinalPrice(basePrice, passTypeVariation, flightTypeVariation) {
    return Number.parseFloat(basePrice * ((100 + parseInt(passTypeVariation, 10))) * ((100 + parseInt(flightTypeVariation)) / 10000)).toFixed(2);
  }

  function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
    // console.log("In calculateDefaultFinalPrice()");
    // console.log(basePrice, passengerType, flightType);
    let price = basePrice;
    
    if (passengerType.toLowerCase() === "regular")
      price *= 0.95;
    else if (passengerType.toLowerCase() === "vip")
      price *= 1.05;

    if (flightType.toLowerCase() === "economy")
      price *= 0.97;
    else if (flightType.toLowerCase() === "business")
      price *= 1.1;
    
    return Number.parseFloat(price).toFixed(2);
  }

  function calculateTotalFinalPrice(numSeats, passengerType, flightType, basePrice) {
    return numSeats * calculateDefaultFinalPrice(basePrice, passengerType, flightType);
  }

  return {calculateDefaultFinalPrice, calculateFinalPrice, calculateTotalFinalPrice};
}

module.exports = Prices();