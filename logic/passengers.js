function Passengers() {

    function checkFlightCapacity(flightCapacity, passengersArray) {
        let passengersNumber = 0;
        let passengers;
        for(passengers of passengersArray) {
            passengersNumber += passengers;
        }
        if (passengersNumber > flightCapacity) {
            throw new Error("Flight capacity (" + flightCapacity + ") exceeded. You have " + passengersNumber + " passengers.");
        }
        return passengersNumber;
     }

     return {checkFlightCapacity};

}

module.exports = Passengers();