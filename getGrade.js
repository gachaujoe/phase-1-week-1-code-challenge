function getGrade(mark) {
    // Convert the input to a number
    const numMark = Number(mark);
  
    // Check if the mark is valid
    if (isNaN(numMark) || numMark < 0 || numMark > 100) {
      return "Invalid input. Please enter a number between 0 and 100.";
    } else {
      // Determine the corresponding grade
      let grade;
      if (numMark > 79) {
        grade = "A";
      } else if (numMark >= 60) {
        grade = "B";
      } else if (numMark >= 50) {
        grade = "C";
      } else if (numMark >= 40) {
        grade = "D";
      } else {
        grade = "E";
      }
  
      // Return the grade
      return `The student's grade is ${grade}.`;
    }
}

console.log(getGrade(20));
console.log(getGrade(30));
console.log(getGrade(40));
console.log(getGrade(50));
console.log(getGrade(60));
console.log(getGrade(70));