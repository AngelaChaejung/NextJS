function solution(today, terms, privacies) {
  const todayTime = new Date(today).getTime(); // 오늘 날짜를 밀리초 단위로 변환
  const expiredPrivacies = []; // 파기해야 할 개인정보 번호를 저장할 배열

  for (let i = 0; i < privacies.length; i++) {
    const [date, term] = privacies[i].split(" "); // 개인정보 수집 일자와 약관 종류를 구분
    const expirationTime = new Date(date).setMonth(
      new Date(date).getMonth() + parseInt(terms[terms.findIndex((x) => x.startsWith(term))].split(" ")[1])
    );
    // 보관 가능한 기한을 계산하고 밀리초 단위로 변환
    if (todayTime >= expirationTime) {
      expiredPrivacies.push(i + 1); // 유효기간이 지난 경우 개인정보 번호를 배열에 추가
    }
  }

  return expiredPrivacies; // 파기해야 할 개인정보 번호 배열 반환
}
console.log(solution(	"2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]))
//위 코드에서 new Date(today).getTime()와 같이 Date 객체를 생성하여 밀리초 단위의 시간 값을 계산합니다.
// new Date(date).setMonth(new Date(date).getMonth() + parseInt(terms[terms.findIndex(x => x.startsWith(term))].split(' ')[1]))
// 와 같이 보관 가능한 기한을 계산할 때에도 Date 객체를 사용합니다. 계산 결과를 밀리초 단위로 변환하여 todayTime과 expirationTime에 저장합니다.

// privacies 배열을 순회하며 split() 메소드로 개인정보 수집 일자와 약관 종류를 분리합니다. terms.findIndex(x => x.startsWith(term))와 같이
// terms 배열에서 해당 약관 종류의 인덱스를 찾습니다. 해당 인덱스의 원소를 가져와서 split() 메소드로 유효기간을 분리하고 parseInt() 함수로 정수형으로 변환합니다.
// 이후 setMonth() 메소드를 사용하여 개인정보를 보관할 수 있는 날짜를 계산합니다. 계산 결과를 todayTime과 비교하여 유효기간이 지난 경우 expiredPrivacies 배열에 개인정보 번호를 추가합니다.

// 최종적으로 expiredPrivacies 배열을 반환하여 파기해야 할 개인정보 번호를 담은 배열을 출력합니다.
