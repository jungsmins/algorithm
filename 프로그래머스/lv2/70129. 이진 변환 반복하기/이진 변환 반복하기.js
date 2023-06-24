function solution(s) {
  const answer = [0, 0];
  let rowS = 0;

  while (s.length > 1) {
    rowS = s.length;
    s = s.split("0").join("");
    answer[0]++;
    answer[1] += (rowS - s.length);
    s = s.length.toString(2);
  }

  return answer;
}