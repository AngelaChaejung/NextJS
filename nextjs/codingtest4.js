function solution(n) {
  let dragon = 1;
  let egg = 0;
  let uselessdragon = 0;
  for (let i = 0; i <= n; i++) {
    egg += 1; //매일 알 하나씩 증가
    if (i % 2 === 0) {
      dragon++;
      egg -= 1;
    } //드래곤은 이틀에 한 번 증가
  }

  let answer = dragon + egg;
  return answer;
}
console.log(solution(4));
