function countSort(arr) {
  // Write your code here
  const result = [];

  arr.forEach((sub, index) => {
    const currInt = sub[0];

    if (!result[currInt]) {
      result[currInt] = [];
    }

    if (index < arr.length / 2) {
      result[currInt].push("-");
    } else {
      result[currInt].push(sub[1]);
    }
  });

  console.log(
    result
      .filter((sub) => !!sub?.length)
      .flat()
      .join(" ")
  );
}
