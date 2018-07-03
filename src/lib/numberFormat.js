// 获取传入的 min max 之间的整数值
const numberRandom = function (min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 将传输的数值处理成所需位数（开头加0）
const numberPad = function (source, length = 2) {
  let pre = ""
  const negative = source < 0
  const string = String(Math.abs(source))
  if (string.length < length) {
      pre = (new Array(length - string.length + 1)).join('0')
  }
  return (negative ?  "-" : "") + pre + string
}

// 将传输的数值处理成以所需个数逗号分隔形式
const numberComma = function (source, length = 3) {
  source = String(source).split(".");
  source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{'+length+'})+$)','ig'),"$1,");
  return source.join(".");
}

export default {
  numberRandom,
  numberPad,
  numberComma
}