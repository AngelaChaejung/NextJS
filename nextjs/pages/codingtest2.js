function solution(s) {
  const answer = 0;
  let a = 0;
  let b = 0;
  while (s) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[0]) {
        a += 1;
      } else {
        b += 1;
      }

      if (a === b) {
        answer += 1;
        s = s.slice(i + 1);
        break;
      }
    }
    if (a !== b) {
      answer += 1;
      break;
    }
  }
  return answer;
}
solution("banana");
