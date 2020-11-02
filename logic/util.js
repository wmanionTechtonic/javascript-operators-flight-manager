"use strict"

function Util() {
  function calculateTotalDistributedPassengers(numbers) {
    return Object.values(numbers).reduce((acc, cur) => acc + cur);
  }

  function calculateTotalNumberOfPassengers(arr) {
    return arr.reduce((acc, cur) => acc + cur);
  }

  function checkInput(data) {
    // console.log(`The input is ${data}.`);
    if (!data) {
      // console.log("failed first test");
      throw new Error("The input should not be empty");
    } 
    if (data != parseInt(data, 10)) {
      // console.log(parseInt(data, 10));
      // console.log(data);
      console.log(`${data} failed the second test.`);
      throw new Error("The input should be a number"); 
    }
  }

  function calculateTotalDistance(arr) {
    return arr.filter((a) => a > 0).reduce((acc, cur) => acc + cur);
  }

  function calculateBonusPoints(bizDistances, ecoDistances, bizPercent, ecoPercent) {
    return (calculateTotalDistance(bizDistances) * bizPercent + calculateTotalDistance(ecoDistances) * ecoPercent) / 100;
  }

  return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};
}

module.exports = Util();