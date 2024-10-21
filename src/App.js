import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    let delimiters = [",", ":"]; //구분자

    //추가 커스텀 구분자확인
    //앞의 두문자가 //인지 확인
    if (input.indexOf("//") === 0) {
      //\n의 위치 확인
      let endIdx = input.indexOf("\\n");

      //두 사이의 문자를 추출한다.
      const newDelimiter = input.slice(2, endIdx);
      //새로운 구분자로 추가
      delimiters.push(newDelimiter);

      //입력값을 구분자 부분 제거하여 진행
      input = input.slice(endIdx + 2);
    }
    //구분자들을 정규표현식을 이용하도록 조합
    const regex = new RegExp(`[${delimiters.join("")}]`);
    const result = input.split(regex).map(Number); //

    //result들을 합하여 결과 출력
    const output = result.reduce((acc, ele) => acc + ele, 0);
    Console.print(`결과 : ${output}`);
  }
}

export default App;
