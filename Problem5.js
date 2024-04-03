//5번 문제
let user = {
  name: "예린",
  part: "FE",
};

user = JSON.stringify(user);

let parsed = JSON.parse(user);

console.log(user);
console.log(parsed);