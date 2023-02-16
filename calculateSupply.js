function calculateSupply(yourAge, dailyAmount) {
  let lifetimesupply = `You will need ${
    yourAge * dailyAmount
  } to last you until the ripe old age of 90`;
  return lifetimesupply;
}

console.log(calculateSupply(35, 3));
console.log(calculateSupply(50, 2));
console.log(calculateSupply(27, 4));
