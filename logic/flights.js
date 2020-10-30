function Flights() {
  function calculateNumberOfFlights(numPassengers, flightCapacity) {
    if (numPassengers !== parseInt(numPassengers, 10))
      throw new Error("The number of passengers must be a positive integer value");

    if (numPassengers <= 0) 
      throw new Error("The number of passengers must be a positive integer value");

      if (flightCapacity !== parseInt(flightCapacity, 10))
        throw new Error("The capacity of the flight must be a positive integer value");
      if (flightCapacity <= 0)
        throw new Error("The capacity of the flight must be a positive integer value");

    return Math.ceil(numPassengers / flightCapacity);
  }

  function checkAircraftRevision(distanceLimit, distances) {
    let totalDistance = distances.reduce((acc, cur) => acc + cur, 0);
    if (totalDistance  <= (distanceLimit / 2))
      return "The revision needs to be done within the next 3 months";
    else if (totalDistance <= (distanceLimit * 3 / 4))
      return "The revision needs to be done within the next 2 months";
    if (totalDistance <= distanceLimit)
      return "The revision needs to be done within the next month"
    else
      throw new Error("Aircraft is grounded.");
  }

  return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();
