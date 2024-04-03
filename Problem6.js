// 6번 문제

const arr = [{ part: "fe", name: "홍현", age: 26},
  { part: "fe", name: "애리", age: 24},
  { part: "fe", name: "나연", age: 23},
  { part: "staff", name: "나현", age: 24}];


let members = arr.filter((value) => value.part != "staff");

members = members.sort(function (a, b) { return b.age - a.age; });

members = members.map((member) => {
  member.part = member.part.toUpperCase();
  return member;
})

console.log(members);