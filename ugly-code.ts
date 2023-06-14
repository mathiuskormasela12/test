const alternateBoolean = (absNumber): boolean => {
  const absoluteNumber = Math.abs(absNumber);
  let isAlternate = true;

  for (let i = 0; i < absoluteNumber; i++) {
    isAlternate = !isAlternate;
  }

  return isAlternate;
}

console.log(alternateBoolean(-474));
