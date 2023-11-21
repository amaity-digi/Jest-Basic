const ReserveString = (str) => {
  const lowercase = str.toLowerCase();
  const reverse = lowercase.split("").reverse().join("");
  return reverse;
}

module.exports = ReserveString;