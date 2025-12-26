function bestClosingTime(customers: string): number {
  let score = 0;
  let bestScore = 0;
  let bestHour = -1;

  for (let i = 0; i < customers.length; i++) {
    if (customers[i] === "Y") score++;
    else score--;

    if (score > bestScore) {
      bestScore = score;
      bestHour = i;
    }
  }

  return bestHour + 1;
}

console.log(bestClosingTime("YYNY"));
console.log(bestClosingTime("NNNNN"));
console.log(bestClosingTime("YYYY"));
console.log(bestClosingTime("YNYNY"));
console.log(bestClosingTime("NNYNNY"));
console.log(bestClosingTime("YNNYNYNNY"));
