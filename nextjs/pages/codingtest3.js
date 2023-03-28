function solution(v) {
  // 세 점을 각각 x, y 좌표값으로 분리
  const xCoords = [v[0][0], v[1][0], v[2][0]];
  const yCoords = [v[0][1], v[1][1], v[2][1]];

  let x, y;
  // x 좌표값이 같은 두 점을 찾음
  if (xCoords[0] === xCoords[1]) {
    x = xCoords[2];
  } else if (xCoords[0] === xCoords[2]) {
    x = xCoords[1];
  } else {
    x = xCoords[0];
  }
  // y 좌표값이 같은 두 점을 찾음
  if (yCoords[0] === yCoords[1]) {
    y = yCoords[2];
  } else if (yCoords[0] === yCoords[2]) {
    y = yCoords[1];
  } else {
    y = yCoords[0];
  }
  // 나머지 한 점의 좌표 반환
  return [x, y];
}
