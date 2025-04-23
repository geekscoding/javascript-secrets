/*
먼저 N개의 원소에 대한 평균 값을 계산한다. o(N)
다시 N개의 원소를 하나씩 확인하여 평균 이상인지 확인한다. o(N)
전체 시간복잡도는 o(N)이다.
인덱스 0 1 2 3 4 5 6
값 71 59 82 40 33 12 68
계산된 평균 값: 52.143
평균 이상인 값들: [71, 59, 82, 68]
따라서, 평균을 넘는 학생의 비율은 4/7 = 57.143%이다.
*/

const scores = [71, 59, 82, 40, 33, 12, 68];
const N = scores.length;

const total = scores.reduce((sum, score) => sum + score, 0);
const average = total / N;
console.log(`계산된 평균값: ${average.toFixed(3)}`);

const aboveAverage = scores.filter(score => score >= average);
console.log(`평균 이상인 값들: [${aboveAverage.join(', ')}]`);

const ratio = (aboveAverage.length / N) * 100;
console.log(`평균을 넘는 학생의 비율은 ${aboveAverage.length}/${N} = ${ratio.toFixed(3)}%이다.`);