function solution(prices) {
  let answer = 0;
  let min = prices[0];
  let todayprice = prices[i];
  let profits = todayprice - min;

  for (let i = 1; i < prices.length; i++) {
    if (todayprice < min) {
      //현재 금액이 최소금액보다 낮음
      answer = todayprice; //최소금액으로 대체
    } else {
      if (profits > answer) {
        answer = profits;
      }
    }
  }

  return answer;
}
console.log(solution([3, 2, 4, 8, 7]));
