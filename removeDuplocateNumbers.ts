const removeDuplicateNumbers = (numbers: number[]): number[] => {
  const uniqueNumbers: number[] = [];

  for (const number of numbers) {
    if (!uniqueNumbers.includes(number)) {
      uniqueNumbers.push(number);
    }
  }

  return uniqueNumbers;
}

console.log(removeDuplicateNumbers([1, 8 , 8, 10,1, 2, 3, 3, 4, 5, 4, 6, 6, 7]));
