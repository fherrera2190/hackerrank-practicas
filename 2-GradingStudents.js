function gradingStudents(grades) {
  // Write your code here
  function lessthree(n) {
    let rounded = n;
    while (!(rounded % 5 === 0)) {
      rounded++;
    }
    if (rounded - n < 3) {
      return rounded;
    } else {
      return n;
    }
  }
  const result = grades.map((grade) => {
    if (grade <38) {
      return grade;
    }
    return lessthree(grade);
  });

  return result;
}

console.log(gradingStudents([73, 67, 38, 33]));
