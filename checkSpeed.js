function checkSpeed(speedArg) {
    const speed = Number(speedArg);
    // Check if the speed is valid
    if (isNaN(speed) || speed < 0) {
      return "Invalid input. Please enter a positive number.";
    } else {
      // Calculate the number of demerit points
      const speedLimit = 70;
      const kmPerDemeritPoint = 5;
      const excessSpeed = speed - speedLimit;
      let demeritPoints = 0;

      if (speed < 70) {
        return 'OK'
      }
  
      if (excessSpeed > 0) {
        demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);
      }
  
      // Check if the license is suspended
      if (demeritPoints > 12) {
        return "License suspended.";
      } else {
        return `Points: ${demeritPoints}`;
      }
    }
}

console.log(checkSpeed(20));
console.log(checkSpeed(30));
console.log(checkSpeed(40));
console.log(checkSpeed(50));
console.log(checkSpeed(60));
console.log(checkSpeed(75));
console.log(checkSpeed(80));