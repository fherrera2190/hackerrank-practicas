function processData(input) {
  //Enter your code here
  const [startDate, endDate] = input.trim().split(" ");
  let [day1, month1, year1] = startDate.split("-").map(Number);
  let [day2, month2, year2] = endDate.split("-").map(Number);

  const maxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let count = 0;

  while (true) {
    const dateValue = parseInt(`${day1}${month1}${year1}`, 10);

    if (dateValue % 4 === 0 || dateValue % 7 === 0) {
      count++;
    }

    if (day1 === day2 && month1 === month2 && year1 === year2) {
      break;
    }

    day1++;

    if (findPrimeDates(year1)) {
      maxDays[1] = 29;
    } else {
      maxDays[1] = 28;
    }

    if (day1 > maxDays[month1 - 1]) {
      day1 = 1;
      month1++;
    }

    if (month1 > 12) {
      month1 = 1;
      year1++;
    }
  }

  console.log(count);
}

processData("02-08-2025 04-09-2025");
