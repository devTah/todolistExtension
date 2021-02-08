export function formatDate(date, key = "/") {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear(),
    hours = d.getHours(),
    minutes = d.getMinutes(),
    seconds = d.getSeconds();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return (
    [year, month, day].join(key) +
    " " +
    [
      appendLeadingZeroes(hours),
      appendLeadingZeroes(minutes),
      appendLeadingZeroes(seconds),
    ].join(":")
  );
}

function appendLeadingZeroes(n) {
  if (n <= 9) {
    return "0" + n;
  }
  return n;
}
