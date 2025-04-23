/*
다음의 과정을 통해 시간 복잡도 o(N)으로 문제를 해결할 수 있다.
가장 먼저 최댓값을 계산한다
이후에 각 값을 하나씩 확인하여 새로운 값 X/M x 100을 계산하여 평균을 구한다.
인덱스 0 1 2 3 4 5 6
값 71 59 82 49 33 12 68
최댓값: 82
*/

const scores = [71, 59, 82, 49, 33, 12, 68];
const N = scores.length;

// 1. 최댓값 구하기 (O(N))
const maxScore = Math.max(...scores);
console.log(`최댓값: ${maxScore}`);

// 2. 점수 변환: X / M * 100 (O(N))
const adjustedScores = scores.map(score => (score / maxScore) * 100);
console.log("변환된 점수들:", adjustedScores.map(s => s.toFixed(2)));

// 3. 새로운 평균 계산 (O(N))
const sumAdjusted = adjustedScores.reduce((sum, score) => sum + score, 0);
const newAverage = sumAdjusted / N;

console.log(`조정된 평균 점수: ${newAverage.toFixed(3)}`);