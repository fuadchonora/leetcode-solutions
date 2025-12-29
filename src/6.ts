function convert(s: string, numRows: number): string {
  if (numRows <= 1 || s.length <= 1) return s;

  let result = "";

  let maxGap = numRows * 2 - 3;

  let gaps: number[] = [];
  let val = maxGap;
  while (val > 0) {
    gaps.push(val);
    val = val - 2;
  }
  gaps.push(maxGap);

  console.log(gaps);

  let topGap = gaps[0]!;
  let bottomGap = gaps[gaps.length - 1]!;

  let currentRow = 0;
  while (currentRow < numRows) {
    console.log({ currentRow, topGap, bottomGap });

    let isTopGap = true;
    let idx = currentRow;
    while (s[idx] !== undefined) {
      result = result + s[idx];
      let gap = isTopGap ? topGap : bottomGap;
      console.log({ idx, s: s[idx], gap });
      isTopGap = !isTopGap;
      idx += gap + 1;
    }

    topGap = gaps[currentRow + 1]!;
    bottomGap = gaps[gaps.length - currentRow - 2]!;
    currentRow++;
  }

  return result;
}

console.log(convert("PAYPALISHIRING", 4));

/*
"PAYPALISHIRING"
"0123456789"

2rows
0 => 1,1
1 => 1,1

3rows
0 => 3,3
1 => 1,1
2 => 3,3

4rows
0 => 5,5
1 => 3,1
2 => 1,3
3 => 5,5

5rows
0 => 7,7
1 => 5,1
2 => 3,3
3 => 1,5
4 => 7,7

*/
