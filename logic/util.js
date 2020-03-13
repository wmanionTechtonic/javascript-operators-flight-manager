function Util() {

    function calculateTotalDistributedPassengers(distributedPassengers) {
        let totalDistributedPassengers = 0;
        let value;
        for (value in distributedPassengers) {
           totalDistributedPassengers += distributedPassengers[value];
        }
        return totalDistributedPassengers;
     }

     function calculateTotalNumberOfPassengers(passengersArray) {
        let totalNumberOfPassengers = 0;
        let passengers;
        for (passengers of passengersArray) {
           totalNumberOfPassengers += passengers;
        }
        return totalNumberOfPassengers;
     }

     function checkInput(input) {
      if (!input) {
          throw new Error("Incorrect values. Check all input fields to be filled in.");
      }
      if (isNaN(input)) {
          throw new Error("Incorrect values. Check all input fields to be numbers.");
      }
  }

     return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput};

}

module.exports = Util();