// function arrToObj(arr) {
//   return arr.reduce((obj, item) => {
//     obj[item[0]] = item[1];
//     return obj;
//   }, {});
// }
function arrToObj(arr) {
  return arr.reduce((obj, item) => {
    obj[item[0]] = item[1];
    return obj;
  }, {});
}
const infoArr = ["name", "John"];
const infoObj = arrToObj(infoArr);
console.log(infoObj);

const { ...rest } = {
  c: "val2",
  d: "val3",
};

console.log(rest);
