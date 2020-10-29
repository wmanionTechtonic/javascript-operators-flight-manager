function Util() {
  function calculateTotalDistributedPassengers(numbers) {
    return Object.values(numbers).reduce((acc, cur) => acc + cur);
  }

  function calculateTotalNumberOfPassengers(arr) {
    return arr.reduce((acc, cur) => acc + cur);
  }

  return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = Util();