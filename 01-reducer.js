/* 배열의 모든 요소를 하나로 "축소"해서 하나의 값으로 만드는 데 사용
합계 게산, 객체 병합, 그룹화, 중복 제거
*/

const numbers = [3, 5, 6, 1];
const result = numbers.reduce((acc, curr, idx) => {
    console.log(`step ${idx}: acc = ${acc},curr = ${curr}`);
    return acc + curr;
}, 0);

console.log("Final Result:", result);

const items = ['a', 'b', 'c', 'a', 'b'];
let i = 0;
const unique = items.reduce((acc, curr) => {
    i++;
    console.log(`step ${i}: acc = ${acc},curr = ${curr}`);
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
}, []);

console.log(unique);

// const people = [
//     {name: 'Alice', age: 21},
//     {name: 'Bob', age: 21},
//     {name: 'Charlie', age: 23}
// ];

// i = 0;
// const grouped = people.reduce((acc, person) => {
//     const age = person.age;
//     i++;
//     console.log(`step ${i}: acc = ${JSON.stringify(acc)},curr = ${JSON.stringify(person)}`);
//     if (!acc[age]) acc[age] = [];
//     acc[age].push(person);
//     return acc;
// }, {});

// console.log(grouped);
console.log('');
console.log("===================================")
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 21 },
    { name: 'Charlie', age: 23 }
  ];
  
 i = 0;
  const grouped = people.reduce((acc, person) => {
    const age = person.age;
    i++;
  
    console.log(`step ${i}:`);
    console.log('acc =', JSON.stringify(acc));
    console.log('curr =', person);
  
    if (!acc[age]) acc[age] = [];
    acc[age].push(person);
  
    return acc;
  }, {});
  
  console.log('Final grouped result:', JSON.stringify(grouped, null, 2));


  console.log('');
  console.log("===================================")
  const grouped2 = people.reduce((acc, person, i) => {
    const age = person.age;
    console.log(`Step ${i + 1}: Processing`, person);
    console.log('Before:', JSON.stringify(acc, null, 2));
  
    if (!acc[age]) acc[age] = [];
    acc[age].push(person);
  
    console.log('After:', JSON.stringify(acc, null, 2));
    console.log('---');
    return acc;
  }, {});


  console.log('');
  console.log("===================================")
  const orders = [
    { id: 1, customer: 'Alice', items: [{ name: 'apple', qty: 3 }, { name: 'banana', qty: 2 }] },
    { id: 2, customer: 'Bob', items: [{ name: 'apple', qty: 1 }, { name: 'orange', qty: 5 }] },
    { id: 3, customer: 'Alice', items: [{ name: 'banana', qty: 1 }, { name: 'orange', qty: 2 }] },
  ];

  const summary = orders.reduce((acc, order) => {
    order.items.forEach(item => {
      acc[item.name] = (acc[item.name] || 0) + item.qty;
    });
    return acc;
  }, {});

//   const summary = orders.reduce((acc, order) => {
//     return order.items.reduce((innerAcc, item) => {
//       innerAcc[item.name] = (innerAcc[item.name] || 0) + item.qty;
//       return innerAcc;
//     }, acc); // 중요: acc를 두 번째 reduce의 초기값으로 넘김
//   }, {});