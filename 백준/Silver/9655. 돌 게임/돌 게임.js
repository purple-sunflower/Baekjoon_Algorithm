// 규칙: 전체 돌 개수가 홀수 > "SK"가 win, 짝수 > "CY"가 win

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

function solution(n) {
  let answer = (n%2!=0) ? "SK" : "CY";
  return answer;
}

const winner = solution(input);
console.log(winner);