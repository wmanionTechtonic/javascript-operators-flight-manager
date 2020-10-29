function Passengers() {
  function checkFlightCapacity(flightCapacity, passengerNumbers) {
    let totalPassengers = passengerNumbers.reduce((acc, cur) => acc + cur, 0);
    if (totalPassengers < flightCapacity)
      return totalPassengers;
    else
      throw new Error("Number of passengers exceeds flight capacity");
  }

  function distributeAllSeatsToAllPassengers(vips, regulars, flights, businessSeatsPerFlight, economySeatsPerFlight) {
    let totalBusinessSeats = flights * businessSeatsPerFlight;
    let totalEconomySeats = flights * economySeatsPerFlight;

    let   vipsInBusinessSeats = 0, 
          vipsInEconomySeats = 0, 
          regularsInBusinessSeats = 0, 
          regularsInEconomySeats = 0;

    // Start seating VIPs in Business Class
    if (vips <= totalBusinessSeats) {
      vipsInBusinessSeats = vips;
      totalBusinessSeats -= vips;
      vips = 0;
    }
    else {
      vipsInBusinessSeats = totalBusinessSeats;
      totalBusinessSeats = 0;
      vips -= vipsInBusinessSeats;
    }
    
    // Start seating VIPs in Economy Class
    if (vips <= totalEconomySeats) {
      vipsInEconomySeats = vips;
      totalEconomySeats -= vips;
      vips = 0;
    }
    else {
      vipsInEconomySeats = totalEconomySeats;
      totalEconomySeats = 0;
      vips -= vipsInEconomySeats;
    }

    // Put regular people in remaining Business Class
    if (regulars <= totalBusinessSeats) {
      regularsInBusinessSeats = regulars;
      totalBusinessSeats -= regulars;
      regulars = 0;
    }
    else {
      regularsInBusinessSeats = totalBusinessSeats;
      totalBusinessSeats = 0;
      regulars -= regularsInBusinessSeats; 
    }

    // Put as many regular people in Economy Class as possible
    if (regulars <= totalEconomySeats) {
      regularsInEconomySeats = regulars;
      totalEconomySeats -= regulars;
      regulars = 0;
    }
    else {
      regularsInEconomySeats = totalEconomySeats;
      totalEconomySeats = 0;
      regulars -= regularsInEconomySeats;
    }

    let numbers = {
      "vipPassengersWithBusinessSeats": vipsInBusinessSeats, 
      "vipPassengersWithEconomySeats": vipsInEconomySeats, 
      "regularPassengersWithBusinessSeats": regularsInBusinessSeats, 
      "regularPassengersWithEconomySeats": regularsInEconomySeats, 
    };

    return numbers;
  }

  return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();