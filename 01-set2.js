/*
각원소를 하나씩 확인하며, 42로 나눈 나머지를 차례대로 출력한다
원소를 하나씩 확인한다는 점에서 시간 복잡도는 O(N)이다
인덱스 0 1 2 3 4 5 6
값 105 88 92 215 77 193 302
현재출력할 값: 302 % 42 = 8
나머지 값들: [21, 4, 8, 5, 35, 25, 8]
집합: {21, 4, 8, 5, 35, 25}

*/

// const arr = [105, 88, 92, 215, 77, 193, 302];

// const remainders = arr.map((num, idx) => {
//     const remainder = num % 42;
//     console.log(`인덱스 ${idx} -> ${num} % 42 = ${remainder}`);
//     return remainder;
// });

// console.log("\n전체 나머지 배열:", remainders);
// const uniqueRemainders = new Set(remainders);

// console.log("\n중복 제거된 나머지 집합: ", Array.from(uniqueRemainders));

// const input = "105 88 92 215 77 193 302";
// console.log("input raw:", input);

// const parts = input.trim().split(" ");
// console.log("split:", parts);

// const numbers = parts.map(n => {
//   const num = Number(n);
//   console.log(`converting '${n}' to`, num);
//   return num;
// });

// console.log("final numbers:", numbers);

const input = "105 88 92 215 77 193 302";
const numbers = input.trim().split(/\s+/).map(Number);
console.log(input.trim().split(" "));
console.log(numbers);

const MOD = 42;
const remainders = numbers.map((num, idx) => {
    const rem = num % MOD;
    console.log(`인덱스 ${idx}: ${num} % ${MOD} = ${rem}`);
    return rem;
});

console.log("\n 전체 나머지 배열: ", remainders);

const freqMap = new Map();

remainders.forEach(rem => {
    freqMap.set(rem, (freqMap.get(rem) || 0) + 1);
  });
  
  const sortedEntries = [...freqMap.entries()].sort((a, b) => a[0] - b[0]);
  
  console.log("\n 정렬된 나머지 + 빈도:");
  sortedEntries.forEach(([rem, count]) => {
    console.log(`나머지 ${rem}: ${count}회`);
  });
  
  let mode = null;
  let maxCount = 0;
  for (const [rem, count] of freqMap) {
    if (count > maxCount) {
      maxCount = count;
      mode = rem;
    }
  }
  
  console.log(`\n 최빈값(가장 많이 나온 나머지): ${mode} (${maxCount}회)`);
  
  const uniqueSortedRemainders = sortedEntries.map(([rem]) => rem);
  console.log(`\n 서로 다른 나머지 수: ${uniqueSortedRemainders.length}`);
  console.log("정렬된 고유 나머지 목록:", uniqueSortedRemainders);

  let data = numbers; //input.map(Number);
  let mySet = new Set();

  for (let i = 0; i < 10; i++) {
    mySet.add(data[i] % 42);
  }

  console.log(mySet.size);